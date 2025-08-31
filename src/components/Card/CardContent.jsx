import { Flex, Text, Box } from '@chakra-ui/react';

const CardContent = ({ item }) => {
  const Icon = item.icon;

  return (
    <Flex direction="column" align="center" justify="center" flex="1">
      {/* Icon */}
      <Icon
        size="40px"
        color={item.textColor}
        style={{ marginBottom: '12px' }}
      />

      {/* Main Name */}
      <Text
        className="fredoka"
        fontSize="5xl"
        fontWeight="medium"
        color={item.nameColor}
      >
        {item.name}
      </Text>

      {/* Title */}
      <Text fontSize="md" mt={2} color={item.textColor}>
        {item.title}
      </Text>

      {/* Tags */}
      <Flex wrap="wrap" justify="center" mt={3} gap={2}>
        {item.tags?.map((tag, i) => (
          <Box
            key={i}
            px={2}
            py={1}
            bg="#333"
            borderRadius="5px"
            fontSize="xs"
            color="#cccccc"
          >
            {tag}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default CardContent;
