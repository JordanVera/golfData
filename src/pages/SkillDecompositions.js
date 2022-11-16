import { Container } from 'react-bootstrap';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import SkillDecompositionState from '../Components/SkillDecompositionPage/SkillDecompositionState.js';
import React from 'react';

function SkillDecomposition() {
  return (
    <>
      <Header />
      <Container>
        <SkillDecompositionState />
      </Container>
      <Footer />
    </>
  );
}

export default SkillDecomposition;
