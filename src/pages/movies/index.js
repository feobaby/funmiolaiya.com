import { Box, Image, Text, VStack, UnorderedList, ListItem, Flex } from "@chakra-ui/react";
import movies from "../../components/moviesData";

const MoviesPage = () => {
  return (
    <VStack spacing={16} py={10} px={4} align="stretch">
      {/* Page Header */}
      <Box textAlign="center" maxW="600px" mx="auto">
        <Text fontSize="3xl" fontWeight="bold" color="#ffffff">
          Movies I Love 🎬
        </Text>
        <Text fontSize="md" mt={2} color="#aaaaaa">
          A curated list of movies that inspire me, entertain me, or just stick in my mind.
        </Text>
      </Box>

      {/* Outline Section */}
{/* Outline Section */}
<Box maxW="100%" overflowX="auto" py={2}> {/* reduced vertical padding */}
  <Flex gap={6} justify="center" flexWrap="wrap"> {/* center horizontally and wrap if needed */}
    {movies.map((movie, i) => (
      <Text
        key={i}
        color="#cccccc"
        whiteSpace="nowrap"
        _hover={{ color: "#ffffff", cursor: "pointer" }}
        onClick={() =>
          document.getElementById(movie.title)?.scrollIntoView({ behavior: "smooth" })
        }
      >
        {movie.title}
      </Text>
    ))}
  </Flex>
</Box>




      {/* Movies Sections */}
      {movies.map((movie, i) => (
        <VStack key={i} id={movie.title} spacing={6} align="stretch">
          {/* Poster */}
          <Image
            src={movie.poster}
            alt={movie.title}
            borderRadius="md"
            maxH="500px"
            objectFit="cover"
            boxShadow="lg"
            mx="auto"
          />

          {/* Title */}
          <Text fontSize="2xl" fontWeight="bold" color="#ffffff" textAlign="center">
            {movie.title}
          </Text>

          {/* Description */}
          <Text fontSize="md" color="#cccccc" maxW="800px" mx="auto" textAlign="center">
            {movie.description}
          </Text>

          {/* Notes / Subsections */}
          {movie.notes && (
            <VStack spacing={4} align="stretch" maxW="800px" mx="auto">
              {/* Favorite Scenes */}
              {movie.notes.favoriteScenes && (
                <Box>
                  <Text fontWeight="bold" color="#ffffff" mb={2}>
                    Favorite Scenes:
                  </Text>
                  <UnorderedList ml={4} color="#aaaaaa">
                    {movie.notes.favoriteScenes.map((scene, idx) => (
                      <ListItem key={idx}>{scene}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              )}

              {/* Favorite Characters */}
              {movie.notes.favoriteCharacters && (
                <Box>
                  <Text fontWeight="bold" color="#ffffff" mb={2}>
                    Favorite Characters:
                  </Text>
                  <UnorderedList ml={4} color="#aaaaaa">
                    {movie.notes.favoriteCharacters.map((char, idx) => (
                      <ListItem key={idx}>{char}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              )}

              {/* Themes */}
              {movie.notes.themes && (
                <Box>
                  <Text fontWeight="bold" color="#ffffff" mb={2}>
                    Themes:
                  </Text>
                  <UnorderedList ml={4} color="#aaaaaa">
                    {movie.notes.themes.map((theme, idx) => (
                      <ListItem key={idx}>{theme}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              )}

              {/* Why I Love It */}
              {movie.notes.whyILoveIt && (
                <Box>
                  <Text fontWeight="bold" color="#ffffff" mb={1}>
                    Why I Love It:
                  </Text>
                  <Text color="#aaaaaa">{movie.notes.whyILoveIt}</Text>
                </Box>
              )}
            </VStack>
          )}
        </VStack>
      ))}
    </VStack>
  );
};

export default MoviesPage;
