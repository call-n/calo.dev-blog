import { Blog } from '.contentlayer/generated';
import { Box, Heading, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import formatDate from 'lib/format-date';
import Image from 'next/image';
import Link from 'next/link';

type Field = 'publishedAt' | 'readingTime' | 'description' | 'title' | 'image' | 'slug';

type BlogCardHeroProps = {
  data: Pick<Blog, Field>;
};

export function BlogCardHero(props: BlogCardHeroProps) {
  const { data } = props;
  const { title, publishedAt, image, readingTime, slug } = data;
  const date = formatDate(publishedAt);

  return (
    <LinkBox marginInlineStart="auto" maxWidth="35rem" justifyContent="space-between" display="flex" flexDirection="column" alignItems="flex-start" position="relative" padding="1.25rem" border="1px solid" borderColor="rgb(88, 91, 99)" textDecoration="none" cursor="default" borderRadius="10px" marginBottom="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)" style={{aspectRatio: '16/9'}}>
        <LinkOverlay href={`/blog/${slug}`}>
            <Text as="time" dateTime={date.iso} fontSize="1rem" zIndex="1" position="relative" fontWeight="600" bg="rgba(0, 0, 0, 0.3)" borderRadius="10px" padding="5px 10px">
                {date.pretty}
            </Text>

            <Heading as="h3" width="230px" zIndex="1" position="relative" fontSize="clamp(1.125rem, 1.09rem + 0.18vw, 1.25rem)" marginBlockStart="clamp(5.375rem, 1.2rem + 0.89vw, 2rem)" maxWidth="18rem" lineHeight="1.4" bg="rgba(0, 0, 0, 0.3)" borderRadius="10px" padding="5px 10px">
                {title}
            </Heading>

            <Image 
            src={image}
            alt={title}
            objectFit="cover"
            layout='fill'
            style={{position: 'absolute', inset: '0 0 0 0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', zIndex: 0}} 
            />
        </LinkOverlay>
    </LinkBox>
  );
}
