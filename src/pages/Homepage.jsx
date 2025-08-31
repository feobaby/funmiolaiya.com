import { VStack, Flex } from '@chakra-ui/react';
import cardData from '../data/cardData.js';
import Intro from '../components/Intro.jsx';
import CardItem from '../components/Card/CardItem.jsx';
import Footer from '../components/Footer.jsx';

const Homepage = () => {
  return (
    <>
      <VStack spacing={8} py={10}>
        <Intro />
        <Flex direction="row" wrap="wrap" gap={6} justify="center" px={4}>
          {cardData.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
        </Flex>
      </VStack>

      <Footer />
    </>
  );
};

export default Homepage;
