import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Hello = () => {
  return (
    <div className="text-focus-in">
      <Box w="80%" p={12} m={4}>
        {/* <Heading as="h6" size="xs" color="red.100">
          Interests
        </Heading> */}
        <Text className="mulish" fontSize="8xl" fontWeight="700">
          Hello! <br />I am Funmi Olaiya. 👋🏾
        </Text>
        <br />
        <Text className="outlined-text" fontSize="6xl" fontWeight="700">
          - Software Engineer, Technical Mentor & Generalist
        </Text>
        <br />
        <Text
          className="mulish other-text outlined-text"
          fontSize="3xl"
          fontWeight="400"
        >
          My fav. quote is one by <i>Nelson Mandela</i>:
          <p fontWeight="100">
            There is no passion to be found playing small - in settling for a
            life that is less than the one you are capable of living. 🧠
          </p>
        </Text>
        <br /> <br />
        <Text className="mulish" fontSize="md" fontWeight="400">
          Learn more about me here 👉🏾 &nbsp;
          <a href="https://github.com/feobaby" target="_blank" rel="noreferrer">
            <u>Github</u>
          </a>
          &nbsp; &nbsp;
          <a
            href="https://portfolio.funmiolaiya.com/"
            target="_blank"
            rel="noreferrer"
          >
            <u>Portfolio</u>
          </a>
        </Text>
      </Box>
    </div>
  );
};

export default Hello;
