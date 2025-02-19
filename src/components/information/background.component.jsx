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
            building cool stuff. I got my Master's degree in Computer
            Science from the University of Waterloo, Canada.
          </Highlight>
          <Text fontSize="20px">
                      I've gained considerable experience in software engineering, working
                      on various projects. I've also mentored aspiring developers who now
                      work for reputable companies. <br/>
                      I am a staunch supporter of good
                      documentation and open-source initiatives!
                    
                    </Text>
        </Text>
      </Box>
    </div>
  );
};

export default Background;
