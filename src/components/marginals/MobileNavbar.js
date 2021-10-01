import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
import { faUsers, faUserCircle, faJedi } from '@fortawesome/free-solid-svg-icons';

// Components
import Button from '../shared/Button';

const MobileNavContainer = styled.nav`
  width: 100%;
  height: 120px;

  position: fixed;
  bottom: 0;
  z-index: 10000;

  background: linear-gradient(0deg, #353a40, #16171b);
  border: 2px solid #202326;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1150px) {
    display: none;
  }
`;

const MOBILE_STATE = {
  COMMUNITY: 'Community Page',
  PROFILE: 'Profile',
  GITWARS: 'Gitwars',
};

const MobileNavbar = () => {
  const [active, setActive] = useState(MOBILE_STATE.COMMUNITY);

  const setActivePage = (current) => setActive(current);

  return (
    <MobileNavContainer style={{ backgroundColor: '#424750' }}>
      <Button
        icon={faUsers}
        active={active === MOBILE_STATE.COMMUNITY}
        setActivePage={() => setActivePage(MOBILE_STATE.COMMUNITY)}
      />
      <Button
        icon={faUserCircle}
        active={active === MOBILE_STATE.PROFILE}
        setActivePage={() => setActivePage(MOBILE_STATE.PROFILE)}
      />
      <Button
        icon={faJedi}
        active={active === MOBILE_STATE.GITWARS}
        setActivePage={() => setActivePage(MOBILE_STATE.GITWARS)}
      />
    </MobileNavContainer>
  );
};

export default MobileNavbar;
