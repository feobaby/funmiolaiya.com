import React from 'react';
import { Text, Box, Button, Heading, Stack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaProjectDiagram } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';

const Other = () => {
  return (
    <div>
      <div>
        <Heading as="h6" size="xs" color="red.100">
          Other
        </Heading>
        <Text fontSize="20px">
          You can locate me or explore my professional profiles through the
          following links:
        </Text>
      </div>
      <Box>
        <Stack direction="row" align="center" style={{ flexWrap: 'wrap' }}>
          <Button
            height="40px"
            width="120px"
            borderColor="red.100"
            leftIcon={<FaGithub />}
            colorScheme="white"
            variant="outline"
            onClick={() => window.open('https://github.com/feobaby')}
          >
            GitHub
          </Button>
          <Button
            height="40px"
            width="120px"
            borderColor="red.100"
            leftIcon={<FaLinkedin />}
            colorScheme="white"
            variant="outline"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/funmilayo-e-olaiya-167490ba/'
              )
            }
          >
            LinkedIn
          </Button>
          <Button
            height="40px"
            width="120px"
            borderColor="red.100"
            leftIcon={<FaHashnode />}
            colorScheme="white"
            variant="outline"
            onClick={() => window.open('https://ferns.hashnode.dev/')}
          >
            Tech Blog
          </Button>
          <Button
            height="40px"
            width="120px"
            borderColor="red.100"
            leftIcon={<FaProjectDiagram />}
            colorScheme="white"
            variant="outline"
            onClick={() => window.open('https://funmi.btw.so/')}
          >
            Portfolio
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Other;
