import React from 'react';
import Background from '../information/background.component.jsx';
import Other from '../information/other.component.jsx';
import { Divider } from '@chakra-ui/react';
import './homepage.css';

const Homepage = () => {
  return (
    <div className="hpContainer">
      <br />     <br />     <br />     <br />
      <Background />
      <br />
      <Divider />
      <br />
      <Other />
      <br />
      <p style={{ position: 'absolute' }}>&copy; 2025 Funmi Olaiya</p>
    </div>
  );
};

export default Homepage;
