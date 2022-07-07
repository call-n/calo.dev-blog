import { Blog } from '.contentlayer/generated';
import { Box, Heading, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import formatDate from 'lib/format-date';
import Image from 'next/image';
import Link from 'next/link';

type Field = 'publishedAt' | 'readingTime' | 'description' | 'title' | 'image' | 'slug' | 'tags';

type BlogCardProps = {
  data: Pick<Blog, Field>;
};

export function BlogCard(props: BlogCardProps) {
  const { data } = props;
  const { title, publishedAt, image, readingTime, slug, tags, description } = data;
  const date = formatDate(publishedAt);

  return (
    <LinkBox 
      as="article" 
      display="flex"
      flexDirection="column"  
      alignItems="flex-start"
      position="relative"
      padding="1.25rem"
      border="1px solid"
      borderColor="maincolor.bordergray"
      borderRadius="10px"
      maxWidth="37rem"
      textDecoration="none"
      wordBreak="break-word"
      bg="maincolor.corebg"
      _hover={{ bg: 'maincolor.midbg', borderColor: 'sage.base' }}
    >
      <Box overflow="hidden" position="relative" zIndex="1">
        <Image 
          src={image} 
          alt={title} 
          width="570" 
          height="330" 
          objectFit="cover" 
          style={{aspectRatio: '5/3', borderRadius: '3px', height: 'auto', maxWidth: '100%'}} />
      </Box>

      <Box flex="1" mt="5">
        <HStack spacing="5" fontSize="sm">
          <HStack spacing="2" color="sage.base">
            <Box as="time" dateTime={date.iso}>
              {date.pretty}
            </Box>
            <span aria-hidden>•</span>
            <Box>{readingTime.text}</Box>
          </HStack>
        </HStack>

        <Heading size="md" fontWeight="semibold" marginY="4">
          <Link href={`/blog/${slug}`} passHref>
            <LinkOverlay>{title}</LinkOverlay>
          </Link>
        </Heading>
        <Text marginTop="1em">
          {description}
        </Text>
      </Box>
    </LinkBox>
  );
}
