import { VStack, Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const MovieNotes = ({ notes }) => {
  if (!notes) return null;

  return (
    <VStack spacing={4} align="stretch" maxW="800px" mx="auto">
      {notes.favoriteScenes && (
        <Box>
          <Text fontWeight="bold" color="#ffffff" mb={2}>
            Favorite Scenes:
          </Text>
          <UnorderedList ml={4} color="#aaaaaa">
            {notes.favoriteScenes.map((scene, idx) => (
              <ListItem key={idx}>{scene}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}

      {notes.favoriteCharacters && (
        <Box>
          <Text fontWeight="bold" color="#ffffff" mb={2}>
            Favorite Characters:
          </Text>
          <UnorderedList ml={4} color="#aaaaaa">
            {notes.favoriteCharacters.map((char, idx) => (
              <ListItem key={idx}>{char}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}

      {notes.themes && (
        <Box>
          <Text fontWeight="bold" color="#ffffff" mb={2}>
            Themes:
          </Text>
          <UnorderedList ml={4} color="#aaaaaa">
            {notes.themes.map((theme, idx) => (
              <ListItem key={idx}>{theme}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}

      {notes.whyILoveIt && (
        <Box>
          <Text fontWeight="bold" color="#ffffff" mb={1}>
            Why I Love It:
          </Text>
          <Text color="#aaaaaa">{notes.whyILoveIt}</Text>
        </Box>
      )}
    </VStack>
  );
};

export default MovieNotes;
