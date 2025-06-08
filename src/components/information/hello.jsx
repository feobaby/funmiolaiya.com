import { Box, Text, Flex } from '@chakra-ui/react';

const Hello = () => {
  return (
    <div className="text-focus-in">
      <Box
        w={['95%', '90%', '80%']}
        p={6}
        m={4}
        maxW="1000px"
        mx="auto"
        justify="center"
        align="center"
      >
        <Text
          className="outlined-text"
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
          Software Engineer, Technical Mentor & Generalist
        </Text>
        <br />
        <Flex
          direction="row"
          justify="center"
          align="center"
          wrap="wrap"
          gap={4}
          p={4}
        >
          <Text
            className="outlined-text"
            fontSize={['24px', '32px']}
            fontWeight="200"
          >
            <a
              href="https://portfolio.funmiolaiya.com/"
              target="_blank"
              without
              rel="noreferrer"
            >
              Portfolio
            </a>
          </Text>
          <Text
            className="outlined-text"
            fontSize={['24px', '32px']}
            fontWeight="200"
          >
            <a
              href="https://github.com/feobaby"
              target="_blank"
              without
              rel="noreferrer"
            >
              GitHub
            </a>
          </Text>
          <Text
            className="outlined-text"
            fontSize={['24px', '32px']}
            fontWeight="200"
          >
            <a
              href="https://www.linkedin.com/in/funmilayo-e-olaiya-167490ba/"
              target="_blank"
              without
              rel="noreferrer"
            >
              {' '}
              LinkedIn
            </a>
          </Text>
          <Text
            className="outlined-text"
            fontSize={['24px', '32px']}
            fontWeight="200"
          >
            <a
              href="https://blog.funmiolaiya.com/"
              target="_blank"
              without
              rel="noreferrer"
            >
              {' '}
              Blog
            </a>
          </Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Hello;
