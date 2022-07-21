import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Button
} from '@chakra-ui/react';
import Container from 'components/container';
import ProjectCard from 'components/project-card';
import ReviewCard from 'components/review-card';
import ViewMore from 'components/view-more';
import {
  allFeaturedProjects,
  allFeaturedReviews,
  allFeaturedBlogs,
} from 'lib/contentlayer-utils';
import sortByPublishedDate from 'lib/sort';
import tools from 'lib/tools';
import Link from 'next/link';
import { BlogCardHero } from 'components/blog-card-hero'

export default function HomePage() {
  return (
    <Container>
      <Flex className="section" paddingBottom="0">
        <Flex className="wrapper switcher" flexWrap="wrap" gap="clamp(3.75rem, 3.21rem + 2.68vw, 5.625rem) clamp(2.375rem, 1.98rem + 1.96vw, 3.75rem)" alignItems="flex-start">
          <Box>
            <Text color="maincolor.midtext">About calo.dev</Text>

            <Box marginBlockStart="clamp(2.375rem, 1.98rem + 1.96vw, 3.75rem)" maxWidth="50ch">

            <Box maxWidth={{ lg: '40rem' }} marginRight="14">
            <Heading
              as="h1"
              lineHeight="1"
              fontSize={{ base: '3.125rem', md: '3rem', lg: '4.25rem' }}
              letterSpacing="tight"
              display="flex"
              flexDirection="column"
              gap="10px"
              marginBottom="2rem"
            >
              Simple approach to coding
            </Heading>
          </Box>

              <Text fontSize={{ base: 'lg', md: '2xl' }} maxWidth="70ch" marginBottom="2rem">Take advantage of the articles that solves both complex and simple problems in mostly Javascipt.</Text>

              <Link href={'/blog'}>
                <Button
                  minW="10.8rem"
                  aria-label="All blog articles"
                  fontWeight="bold"
                  letterSpacing="wide"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  textTransform="uppercase"
                  color="black"
                  paddingX="10"
                  paddingY="5"
                  rounded="lg"
                  transition="background 0.2s ease-in-out"
                  bg="sage.base"
                  _hover={{ bg: 'sage.dark' }}
                  _active={{ bg: 'sage.darker' }}
                >
                  &gt; All blog articles
                </Button>
              </Link>
            </Box>
          </Box>
          <Box>
            {allFeaturedBlogs.map((blog) => (
              <BlogCardHero key={blog.title} data={blog} />
            ))}
          </Box>
        </Flex>
      </Flex>

      <Box as="section" className="section" paddingBottom="0">
        <Box className="wrapper">
        <Heading size="3xl" letterSpacing="tight">
          Featured Projects
        </Heading>
        <Box marginTop="vGutter">
          <Stack spacing="20">
            {allFeaturedProjects.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
        </Box>
      </Box>

      <Box as="section" className="section">
        <Box className="wrapper">
          <Heading size="3xl" letterSpacing="tight" position="relative">
            Featured Reviews
          </Heading>
          <Box marginY="10">
            <Flex direction="column" gap="6">
              {allFeaturedReviews.sort(sortByPublishedDate).map((review) => (
                <ReviewCard key={review.title} data={review} />
              ))}
            </Flex>
          </Box>

          <Link href="/reviews" passHref>
            <ViewMore>View all Reviews</ViewMore>
          </Link>
        </Box>
      </Box>

      <Box as="section" className="section">
        <Box className="wrapper">
          <Box marginBottom="16">
            <Heading size="3xl" letterSpacing="tight">
              Tools &amp; Softwares
            </Heading>
            <Text marginTop="5" fontSize="lg" maxWidth={{ md: '45rem' }}>
              Over the years, I had the opportunity to work with various software, tools and
              frameworks. Here are some of them:
            </Text>
          </Box>

          <Wrap spacing="10">
            {tools.map((tool) => (
              <WrapItem fontFamily="heading" fontSize="3xl" color="sage.base" key={tool}>
                {tool}
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Box>
    </Container>
  );
}
