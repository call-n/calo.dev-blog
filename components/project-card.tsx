import { Project } from '.contentlayer/generated';
import { Box, Flex, Heading, HStack, Stack } from '@chakra-ui/react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import { DescriptionList } from './description-item';
import LinkItem from './link-item';
import { GithubIcon, WebsiteIcon } from './social-icons';

type ProjectCardProps = {
  data: Project;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { data: project } = props;
  const Component = useMDXComponent(project.body.code);

  return (
    <Flex gap="20" direction={{ base: 'column', md: 'row' }}>
      <Box maxWidth={{ md: '27.5rem' }} flex="1">
        <Stack spacing="6">
          <Heading as="h3" color="sage.dark" letterSpacing="tight">
            {project.title}
          </Heading>
          {(project.github || project.website) && (
            <HStack spacing="12">
              {project.github && (
                <LinkItem icon={GithubIcon} href={project.github} iconColor="whiteAlpha.600">
                  Github
                </LinkItem>
              )}
              {project.website && (
                <LinkItem icon={WebsiteIcon} href={project.website} iconColor="whiteAlpha.600">
                  Website
                </LinkItem>
              )}
            </HStack>
          )}
          <Box fontSize="lg">
            <Component />
          </Box>
        </Stack>

        <Box marginTop="12">
          <DescriptionList data={project.metadata} />
        </Box>
      </Box>

      <ProjectImageCard src={project.image} alt={project.title} />
    </Flex>
  );
}

type ProjectImageCardProps = {
  src?: string;
  alt: string;
  objectPosition?: string;
};

function ProjectImageCard(props: ProjectImageCardProps) {
  const { src, alt, objectPosition = '-16%' } = props;
  return (
    <Box
      flex={{ md: '1' }}
      position="relative"
      height="25rem"
      width="100%"
      overflow="hidden"
      bg="linear-gradient(180deg, #AC75EA 0%, #1fbafe 100%);"
      rounded="2xl"
    >
      <Box
        position="absolute"
        left="10"
        top="10"
        width="56.25rem"
        height="31.25rem"
        bg="white"
        rounded="lg"
        overflow="hidden"
        boxShadow="xl"
        sx={{
          ' > span': {
            transform: 'scale(1.01)',
          },
        }}
      >
        <Image
          alt={alt}
          src={src}
          layout="fill"
          objectPosition={objectPosition}
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}
