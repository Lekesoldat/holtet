import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import About from './About.js';
import ProjectGrid from './ProjectGrid';
import Connect from './Connect';
import Footer from './Footer';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <About />
        <ProjectGrid />
        <Connect />
      </Main>
      <Footer />
    </>
  );
};

export default App;
