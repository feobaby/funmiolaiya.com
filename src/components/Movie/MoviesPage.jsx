import { VStack, Box, Text } from '@chakra-ui/react';
import moviesData from '../../data/moviesData';
import MovieSection from './MoviesSection';

const MoviesPage = () => {
  return (
    <VStack spacing={16} py={10} px={4} align="stretch">
      {/* Page Header */}
      <Box textAlign="center" maxW="600px" mx="auto">
        <Text fontSize="5xl" fontWeight="bold" color="#ffffff">
          Movies I Love 🎬
        </Text>
        <Text fontSize="lg" mt={2} color="#aaaaaa">
          I’ve always loved watching movies, and throughout the years, certain
          films have stood out, some that inspired me, others that entertained
          me, and a few that left a meaningful impact on my perspective. These
          are the movies I feel deserve to be highlighted here. Enjoy!
        </Text>
      </Box>

      {/* Movies Sections */}
      {moviesData.map((movie, i) => (
        <MovieSection key={i} movie={movie} />
      ))}
    </VStack>
  );
};

export default MoviesPage;
