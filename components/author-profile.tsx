import { Box, Circle, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Emoji from './emoji';

export default function AuthorProfile() {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '4', md: '8' }}>
      <Circle size="80px" overflow="hidden">
        <Image
          alt="call-n"
          src="/static/images/calo-headshot.webp"
          width="80px"
          height="80px"
        />
      </Circle>
      <Box maxWidth="40rem">
        <Heading size="md">Written by call-n</Heading>
        <Text mt="4" color="gray.400" lineHeight="taller">
        An engineer with a some years of experience, specializing in frontend systems like React.js and Next.js. Very intrested in the backend too ☺️
        </Text>
      </Box>
    </Flex>
  );
}
