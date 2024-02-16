import React from 'react';
import Background from '../information/background.component.jsx';
import Tech from '../information/tech.component.jsx';
import Interest from '../information/interests.component.jsx';
import Other from '../information/other.component.jsx';
import { Divider } from '@chakra-ui/react';
import './homepage.css';

const Homepage = () => {
  return (
    <div className="hpContainer">
      <Background />
      <br />
      <Divider />
      <br />
      <Tech />
      <br />
      <Divider />
      <br />
      <Interest />
      <br />
      <Divider />
      <br />
      <Other />
      <br />
      <p style={{ position: 'absolute' }}>&copy; 2024 Funmilayo Olaiya</p>
    </div>
  );
};

export default Homepage;
