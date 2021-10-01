/* eslint-disable no-console */
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) =>
      // console.log(new Error({ message, location, path })),
      console.error({ message, location, path }),
    );
  } else if (networkError) {
    const { message, name, respose, result, bodyText, stack, statusCode } = networkError;
    console.log(
      new Error({
        message,
        name,
        respose,
        result,
        bodyText,
        stack,
        statusCode,
      }),
    );
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'https://api.github.com/graphql',
  }),
]);

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: 'Bearer d14e743baa4e8cafd771308c6a71d484152b2220',
  },
}));

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
  name: 'hacktoberfest-2021-client',
  version: '1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export default ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>;
