import { Button, Link } from '@chakra-ui/react';

const CardButton = ({ item }) => {
  if (!item.link) return null;

  return (
    <Link href={item.link} target="_blank" rel="noopener noreferrer">
      <Button
        mt={4}
        size="sm"
        bg={item.buttonColor}
        color="#ffffff"
        borderRadius="md"
        _hover={{ bg: item.buttonHover, transform: 'scale(1.05)' }}
      >
        {item.buttonText}
      </Button>
    </Link>
  );
};

export default CardButton;
