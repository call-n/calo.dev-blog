import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { BlogCard } from 'components/blog-card';
import Container from 'components/container';
import FeaturedBlogCard from 'components/featured-blog-card';
import SearchInput from 'components/search-input';
import SEO from 'components/seo';
import TagCheckboxGroup from 'components/tag-checkbox-group';
import { allFeaturedBlogs } from 'lib/contentlayer-utils';
import useBlogSearch from 'lib/use-blog-search';
import { useRouter } from 'next/router';

export default function Page() {
  const search = useBlogSearch();

  const { isReady } = useRouter();
  if (!isReady) return null;

  return (
    <Container>
      <SEO title="Blog" />
      <Box className="section" paddingBottom="0">
        <Box className="wrapper">
          <Box>
            <Heading size="3xl" marginBottom="6">
              Blog
            </Heading>
            <Text fontSize="lg" maxW="560px">
              Here&lsquo;s a list of articles, thoughts and ideas around topics like design systems,
              accessibility, state machines and lots more.
            </Text>
          </Box>
          <Box maxWidth="xl" mt="8">
            <SearchInput
              placeholder="Search blog"
              defaultValue={search.defaultValue}
              onChange={(value) => {
                search.setParams(value);
              }}
            />
          </Box>

          <TagCheckboxGroup
            marginTop="5"
            data={search.tags}
            isChecked={(item) => search.filters.includes(item)}
            onChange={({ checked, value }) => {
              if (checked) search.addTag(value);
              else search.removeTag(value);
            }}
          />
        </Box>
      </Box>  
      <Box className="section" paddingBottom="0">
        <Box className="wrapper">
          {search.hasFilter || search.hasQuery ? null : (
            <FeaturedBlogCard data={allFeaturedBlogs[0]} />
          )}
        </Box>
      </Box>
      
      <Box className="section">
        <Box className="wrapper" 
          display="grid" 
          gridTemplateColumns={{ base: 'repeat(auto-fit, minmax(16rem, 1fr))', md: 'repeat(auto-fill, minmax(22rem, 1fr))', }} 
          gridGap="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)"
          >
            {search.results.map((blog) => (
              <BlogCard key={blog.title} data={blog} />
            ))}
        </Box>
      </Box>
    </Container>
  );
}
