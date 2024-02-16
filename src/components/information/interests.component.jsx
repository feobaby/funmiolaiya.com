import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import './information.css';

const Interest = () => {
  return (
    <div className="text-focus-in">
      <Box w="100%">
        <Heading as="h6" size="xs" color="red.100">
          Interests
        </Heading>
        <Text fontSize="20px">
          Besides my passion for technology, computer science, and software
          engineering, I'm an enthusiastic reader across various genres of
          books. Off-duty, I really love writing where I delve into op-ed
          articles. I also advocate for various causes close to my heart. One
          aspiration I have is to embark on global travel adventures, aiming to
          witness the world's diversity firsthand.
        </Text>
      </Box>
    </div>
  );
};

export default Interest;
