import { Box, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box bg="#111" color="#aaa" py={6} textAlign="center" mt={10}>
      <Text fontSize="sm">
        &copy; {year} Designed and Developed by{' '}
        <Link href="/" color="#fff" fontWeight="bold">
          Funmi Olaiya
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
