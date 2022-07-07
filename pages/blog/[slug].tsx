import { allBlogs, Blog } from '.contentlayer/generated';
import { Box, Circle, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import AuthorProfile from 'components/author-profile';
import Container from 'components/container';
import HashTags from 'components/hash-tags';
import LinkItem from 'components/link-item';
import MDXComponents from 'components/mdx-components';
import { BlogIcon } from 'components/nav-icons';
import SEO from 'components/seo';
import { TwitterIcon } from 'components/social-icons';
import formatDate from 'lib/format-date';
import { getAbsoluteURL } from 'lib/router-utils';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

export default function BlogPage({ blog, ogImageUrl }: { blog: Blog; ogImageUrl: string }) {
  const Component = useMDXComponent(blog.body.code);
  const date = formatDate(blog.publishedAt);

  return (
    <Container>
      <SEO
        image={ogImageUrl}
        title={blog.title}
        description={blog.description}
        post={{ date: date.iso, tags: blog.tags }}
      />
      <Box className="section">
        <article className="wrapper">
          <Box marginBottom="6">
            <Heading size="2xl" as="h1" marginBottom="3">
              {blog.title}
            </Heading>

            <HashTags data={blog.tags} />

            <Flex
              direction={{ base: 'column-reverse', md: 'row' }}
              gap="4"
              justify="space-between"
              marginTop={{ base: '4', md: '8' }}
            >
              <HStack spacing="3">
                <Circle overflow="hidden">
                  <Image
                    alt="call-n"
                    src="/static/images/calo-headshot.webp"
                    layout="fixed"
                    width="32px"
                    height="32px"
                  />
                </Circle>
                <Text fontWeight="medium">call-n</Text>
              </HStack>

              <HStack color="sage.base">
                <chakra.span>{blog.readingTime.text}</chakra.span>
                <span aria-hidden>•</span>
                <time dateTime={date.iso}>{date.pretty}</time>
              </HStack>
            </Flex>
          </Box>

          <Box
            position="relative"
            height="400px"
            rounded="lg"
            overflow="hidden"
            marginTop="10"
            marginBottom="16"
          >
            <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" priority />
          </Box>

          <Box as="hr" borderColor="whiteAlpha.200" marginY="2rem" />

          <Box
            sx={{
              lineHeight: 'taller',
              'p + p': {
                marginY: '1.25em',
              },
            }}
          >
            <Component components={MDXComponents} />
          </Box>
        </article>

        <Box className="wrapper">
        <Flex justify="space-between" my="20">
          <LinkItem href={blog.tweetUrl} icon={TwitterIcon}>
            Tweet this article
          </LinkItem>
          <LinkItem href={blog.editUrl} icon={BlogIcon}>
            Edit on github
          </LinkItem>
        </Flex>

        <Box as="hr" borderColor="whiteAlpha.200" marginY="3rem" />

        <AuthorProfile />
        </Box>
      </Box>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  const searchParams = new URLSearchParams();
  searchParams.set('title', blog.title);
  searchParams.set('tags', blog.tags.join(','));
  searchParams.set('date', formatDate(blog.publishedAt).pretty);
  searchParams.set('readingTime', blog.readingTime.text);
  const ogImageUrl = getAbsoluteURL(`/api/open-graph-image?${searchParams.toString()}`);

  return { props: { blog, ogImageUrl } };
};
