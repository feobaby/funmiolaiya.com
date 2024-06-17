import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import './information.css';

const Tech = () => {
  return (
    <div className="text-focus-in">
      <Box w="100%">
        <Heading as="h6" size="xs" color="red.100">
          Tech
        </Heading>
        <Text fontSize="20px">
          I've gained considerable experience in software engineering, working
          on various projects. I've also mentored aspiring developers who now
          work for reputable companies. I am a staunch supporter of good
          documentation and open-source initiatives!
          <br />
          Additonally, I began my career as a freelance software engineer to
          dive deep into projects whereby <u>JavaScript/TypeScript</u> has been
          my primary language. I also used <u>Go</u> and <u>Python</u> on the side. Another thing
          I am interestingly looking into is exploring{' '}
          <u>ethics in technology</u> and how they can shape value-driven
          products.
        </Text>
      </Box>
    </div>
  );
};

export default Tech;
