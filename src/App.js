import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import MemberGrid from './components/MemberGridWrapper';
import DesktopNavbar from './components/marginals/DesktopNavbar';
import MobileNavbar from './components/marginals/MobileNavbar';

const PageContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;

  height: 100vh;
  overflow-y: hidden;
  background: linear-gradient(135deg, #32393e, #1d2026);
`;

const Container = styled.div`
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem;
  overflow-y: hidden;
  @media (max-width: 1150px) {
    display: none;
  }
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.2rem;

  display: grid;
  grid-template-columns: 1fr 1.2fr 1.2fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 3.3rem;
`;

const ImgContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;

  text-align: center;
`;

const Img = styled.img`
  width: 90%;
  height: auto;
`;

const MobileViewContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  background: linear-gradient(-45deg, #32393e, #1d2026);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1150px) {
    display: none;
  }
`;

const IndexPage = () => (
  <PageContainer>
    <Container>
      <GridContainer>
        <DesktopNavbar />
        <ImgContainer>
          <Img
            // eslint-disable-next-line max-len
            src='https://res.cloudinary.com/dscnitrourkela/image/upload/Gitwars/xm6ww3pkeaj7kys3kvdg.png'
            alt='Gitlog'
          />
        </ImgContainer>

        <MemberGrid />
      </GridContainer>
    </Container>

    <>
      <MobileNavbar />
      <MobileViewContainer>
        <MemberGrid />
      </MobileViewContainer>
    </>
  </PageContainer>
);

export default IndexPage;
