/* eslint-disable max-len */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import MemberCard from './shared/MemberCard';

// Assets
import members from '../members';

const GridContainer = styled.div`
  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 1150px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
`;

const MemberGridChild = () => (
  <GridContainer>
    {members.map((member) => (
      <MemberCard key={member.github} member={member} />
    ))}
  </GridContainer>
);

export default MemberGridChild;
