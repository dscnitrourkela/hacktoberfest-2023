import { gql } from '@apollo/client';

export default gql`
  query getUserData($login: String!) {
    user(login: $login) {
      name
      bio
      avatarUrl
      contributionsCollection {
        contributionCalendar {
          colors
          totalContributions
        }
      }
    }
  }
`;
