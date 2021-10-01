import React from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonContainer = styled.button`
  border: none;
  background-color: transparent;
  margin: 10px;
  padding: 0px;
  width: 56px;
  height: 56px;
  position: relative;

  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const Layer1 = styled.div`
  width: ${({ active }) => (active ? '52.5px' : '50.4px')};
  height: ${({ active }) => (active ? '52.5px' : '50.4px')};
  border-radius: 50%;
  background: ${({ active }) =>
    active
      ? 'linear-gradient(135deg, #016bb8, #11a8fd)'
      : 'linear-gradient(135deg, #2F353A, #1C1F22)'};
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  z-index: 10004;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;

const Layer2 = styled.div`
  width: ${({ active }) => (active ? '52.5px' : '50.4px')};
  height: ${({ active }) => (active ? '52.5px' : '50.4px')};
  border-radius: 50%;
  background: ${({ active }) =>
    active
      ? 'linear-gradient(135deg, #005ea3, #11a8fd)'
      : 'linear-gradient(135deg, #2F353A, #1C1F22);'};

  border: ${({ active }) => (active ? '1px solid #058dd9' : '1px solid #2F353A')};

  z-index: 3;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  transition: all 0.3s;
`;

const Layer3 = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ active }) =>
    active
      ? 'linear-gradient(135deg, #11a8fd, #0081c9)'
      : 'linear-gradient(135deg, #1D2328, #131314)'};
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  z-index: 2;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  transition: all 0.3s;
`;

const Layer4 = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ active }) =>
    active
      ? 'linear-gradient(135deg, #11a8fd, #0081c9)'
      : 'linear-gradient(135deg, #1D2328, #131314);'};
  box-shadow: 10px 15px 40px rgba(0, 0, 0, 0.5);

  z-index: 1;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  transition: all 0.3s;
  &:active {
    box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Button = ({ icon, active, setActivePage }) => (
  <ButtonContainer onClick={setActivePage}>
    <Layer4 active={active} />
    <Layer3 active={active} />
    <Layer2 active={active} />
    <Layer1 active={active}>
      <FontAwesomeIcon icon={icon} color='#ffffff' size='lg' />
    </Layer1>
  </ButtonContainer>
);

export default Button;
