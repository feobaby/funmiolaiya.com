import { VStack, Image, Text } from '@chakra-ui/react';

const MovieSection = ({ movie }) => {
  return (
    <VStack spacing={4} align="stretch">
      <Text fontSize="4xl" fontWeight="bold" color="#ffffff" textAlign="center">
        {movie.title}
      </Text>

      <Image
        src={movie.poster}
        alt={movie.title}
        borderRadius="md"
        maxH="500px"
        w="80%"
        objectFit="cover"
        boxShadow="lg"
        mx="auto"
      />

      <Text
        fontSize="md"
        color="#cccccc"
        maxW="800px"
        mx="auto"
        textAlign="center"
      >
        {movie.description}
      </Text>
    </VStack>
  );
};

export default MovieSection;
