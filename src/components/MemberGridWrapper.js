/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import MemberGrid from './MemberGrid';

const BackgroundImageContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;

  background: url(https://res.cloudinary.com/dscnitrourkela/image/upload/v1632299484/Gitwars/ixzchacq4xzxyqtoyfct.png);
  object-fit: cover;

  @media (min-width: 1150px) {
    grid-column: 2/4;
    grid-row: 1/4;
    border-radius: 24px;
    width: 100%;
    height: 90vh;
  }
`;

const CommunityMemberGrid = () => (
  <BackgroundImageContainer>
    <MemberGrid />
  </BackgroundImageContainer>
);

export default CommunityMemberGrid;
