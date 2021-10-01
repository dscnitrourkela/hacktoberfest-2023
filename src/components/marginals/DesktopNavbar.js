import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
import { faUsers, faUserCircle, faJedi } from '@fortawesome/free-solid-svg-icons';

// Components
import Button from '../shared/Button';

const DesktopNavWrapper = styled.div`
  padding: 2px;
  background: linear-gradient(135deg, #424750, #202326);
  border-radius: 29px;
  overflow: hidden;

  grid-column: 1/2;
  grid-row: 1/2;
  border-radius: 24px;
`;

const DesktopNavContainer = styled.nav`
  width: 100%;
  height: 100%;
  border-radius: 24px;

  background: linear-gradient(0deg, #353a40, #16171b);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.div`
  width: 100%;
  margin-top: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavName = styled.h3`
  color: #7f8489;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  width: 45%;
  margin-left: 1rem;
`;

const MOBILE_STATE = {
  COMMUNITY: 'Community Page',
  PROFILE: 'Profile',
  GITWARS: 'Gitwars',
};

const DesktopNavbar = () => {
  const [active, setActive] = useState(MOBILE_STATE.COMMUNITY);

  const setActivePage = (current) => setActive(current);

  return (
    <DesktopNavWrapper>
      <DesktopNavContainer>
        <NavItem>
          <Button
            icon={faUsers}
            active={active === MOBILE_STATE.COMMUNITY}
            setActivePage={() => setActivePage(MOBILE_STATE.COMMUNITY)}
          />

          <NavName>Community</NavName>
        </NavItem>

        <NavItem>
          <Button
            icon={faUserCircle}
            active={active === MOBILE_STATE.PROFILE}
            setActivePage={() => setActivePage(MOBILE_STATE.PROFILE)}
          />

          <NavName>Profile</NavName>
        </NavItem>

        <NavItem>
          <Button
            icon={faJedi}
            active={active === MOBILE_STATE.GITWARS}
            setActivePage={() => setActivePage(MOBILE_STATE.GITWARS)}
          />

          <NavName>GitWars</NavName>
        </NavItem>
      </DesktopNavContainer>
    </DesktopNavWrapper>
  );
};

export default DesktopNavbar;
