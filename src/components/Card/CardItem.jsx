import { Box, Flex } from '@chakra-ui/react';
import CardContent from './CardContent';
import CardButton from './CardButton';

const CardItem = ({ item }) => {
  return (
    <Box
      flexBasis={{ base: '80%', md: '30%' }}
      bg={item.color}
      borderRadius="15px"
      p={6}
      boxShadow="lg"
      minHeight="260px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
      transition="all 0.3s ease"
      _hover={{
        transform: `rotate(${item.tilt}) scale(1.05)`,
        boxShadow: 'xl',
      }}
    >
      <Flex direction="column" flex="1" justify="center" align="center">
        <CardContent item={item} />
      </Flex>
      <CardButton item={item} />
    </Box>
  );
};

export default CardItem;
