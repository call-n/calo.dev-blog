import { allProjects } from '.contentlayer/generated';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Container from 'components/container';
import Emoji from 'components/emoji';
import MDXComponents from 'components/mdx-components';
import ProjectCard from 'components/project-card';
import SEO from 'components/seo';

export default function ProjectPage() {
  return (
    <Container>
      <SEO title="Projects" />
      <Box className="section">
        <Box className="wrapper">
          <Heading size="3xl" marginBottom="6">
            Projects
          </Heading>
          <Stack fontSize="lg" maxW="60ch" spacing="4">
            <Text>
              These are som of the project I have worked on in the past, I started of with wordpress in my earlier days
            </Text>
            <Text>Here are some projects I&lsquo;ve worked on that I think are worth mentioning.</Text>
          </Stack>
        </Box>
      </Box>

      <Box className="section">
        <Box className="wrapper">
          <Stack spacing="20">
            {allProjects.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
