import { Box, Text, Flex, VStack, Button, Link } from "@chakra-ui/react";
import imageData from "../data.js";

const Hello = () => {
  return (
    <VStack spacing={8} py={10}>
      {/* Intro Section */}
      <Box textAlign="center" maxW="600px" px={4}>
        <Text fontSize="3xl" fontWeight="bold" color="#ffffff">
          Hey, I’m Funmi 👋🏾
        </Text>
        <Text fontSize="md" mt={2} color="#aaaaaa">
          I’m a computer scientist, writer, and DJ. Here’s a little tour of my work, blogs, and passions.
        </Text>
      </Box>

      {/* Cards Section */}
      <Flex direction="row" wrap="wrap" gap={6} justify="center" px={4}>
        {imageData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Box
              key={index}
                 flexBasis={{ base: "80%", md: "30%" }} 
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
                boxShadow: "xl",
              }}
            >
              {/* Content Wrapper */}
              <Flex direction="column" align="center" justify="center" flex="1">
                {/* Icon */}
                <Icon
                  size="40px"
                  color={item.textColor}
                  style={{ marginBottom: "12px" }}
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

              {/* Button */}
              {item.link && (
                <Link href={item.link} isExternal={item.link.startsWith("http")}>
                  <Button
                    mt={4}
                    size="sm"
                    bg={item.buttonColor}
                    color="#ffffff"
                    borderRadius="md"
                    _hover={{ bg: item.buttonHover, transform: "scale(1.05)" }}
                  >
                    {item.buttonText}
                  </Button>
                </Link>
              )}
            </Box>
          );
        })}
      </Flex>
    </VStack>
  );
};

export default Hello;
