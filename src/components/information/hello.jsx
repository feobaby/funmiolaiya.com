import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Hello = () => {
  return (
    <div className="text-focus-in">
      <Box w={['95%', '90%', '80%']} p={6} m={4} maxW="1000px" mx="auto">
        <Text
          className="mulish"
          fontSize={['32px', '48px', '64px']}
          fontWeight="700"
        >
          Hello! <br />I am Funmi Olaiya. 👋🏾
        </Text>
        <br />
        <Text
          className="outlined-text"
          fontSize={['24px', '36px', '48px']}
          fontWeight="700"
        >
          - Software Engineer, Technical Mentor & Generalist
        </Text>
        <br />
        <Text
          className="mulish other-text outlined-text"
          fontSize={['24px', '32px']}
          fontWeight="400"
        >
          My fav. quote is one by <i>Nelson Mandela</i>:
          <p style={{ fontWeight: 100, marginTop: '8px' }}>
            There is no passion to be found playing small - in settling for a
            life that is less than the one you are capable of living. 🧠
          </p>
        </Text>
        <br /> <br />
        <Text className="mulish" fontSize={['14px']} fontWeight="400">
          Learn more about me here 👉🏾 &nbsp;
          <a href="https://github.com/feobaby" target="_blank" rel="noreferrer">
            <u>Github </u>
          </a>
          &nbsp;
          <a
            href="https://portfolio.funmiolaiya.com/"
            target="_blank"
            rel="noreferrer"
          >
            &     &nbsp;
            <u>Portfolio</u>
          </a>
        </Text>
      </Box>
    </div>
  );
};

export default Hello;
