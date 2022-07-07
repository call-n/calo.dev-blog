import { Box, Flex, Heading, Text, Wrap } from '@chakra-ui/react';
import Container from 'components/container';
import EmptyState from 'components/empty-state';
import SearchInput from 'components/search-input';
import SEO from 'components/seo';
import TagCheckbox from 'components/tag-checkbox';
import ReviewCard from 'components/review-card';
import useReviewSearch from 'lib/use-review-search';
import { useRouter } from 'next/router';

export default function Page() {
  const search = useReviewSearch();

  const { isReady } = useRouter();
  if (!isReady) return null;

  return (
    <Container>
      <SEO title="Review" />
      <Box className="section">
        <Box className="wrapper">
          <Box>
            <Heading size="3xl" marginBottom="6">
              Review
            </Heading>
            <Text fontSize="lg" maxW="560px">
              I speak at conferences and events each year. Most of my talks are live coding or demoing
              sessions which can be scary but fun!
            </Text>
          </Box>

          <Box maxWidth="xl" mt="8">
            <SearchInput
              placeholder="Search talks"
              defaultValue={search.defaultValue}
              onChange={(value) => {
                search.setParams(value);
              }}
            />
          </Box>

          <Wrap mt="5" spacing="3">
            {search.allTags.map((tag) => {
              return (
                <TagCheckbox
                  key={tag}
                  value={tag}
                  checked={search.filters.includes(tag)}
                  onChange={(e) => {
                    if (e.target.checked) search.addTag(tag);
                    else search.removeTag(tag);
                  }}
                >
                  {tag}
                </TagCheckbox>
              );
            })}
          </Wrap>
        </Box>

        <Box className="wrapper" paddingTop="5rem">
          {search.isEmptyResult ? (
            <EmptyState />
          ) : (
            <Flex direction="column" gap="10">
              {search.results.map((talk) => (
                <ReviewCard key={talk.title} data={talk} />
              ))}
            </Flex>
          )}
        </Box>
      </Box>
    </Container>
  );
}
