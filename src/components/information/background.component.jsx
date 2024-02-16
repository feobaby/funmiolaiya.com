import React from 'react';
import { Highlight, Box, Text, Heading } from '@chakra-ui/react';
import './information.css';

const Background = () => {
  return (
    <div className="bgContainer text-focus-in">
      <Box w="100%">
        <Heading as="h6" size="xs" color="red.100">
          Background
        </Heading>
        <Text fontSize="20px">Hey there! &#128512;</Text>
        <Text fontSize="20px">
          <Highlight query={['Funmi']} styles={{ px: '1', bg: 'red.100' }}>
            I'm Funmilayo Olaiya, but you can just call me Funmi. I'm into
            full-stack web development, technical writing, mentoring, and
            building cool stuff. Recently, I got my Master's degree in Computer
            Science from the University of Waterloo, Canada.
          </Highlight>
        </Text>
      </Box>
    </div>
  );
};

export default Background;
