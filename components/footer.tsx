import { Box, Flex, GridItem, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import siteConfig from 'site.config';
import LinkItem from './link-item';
import { EmailIcon, GithubIcon, TwitterIcon } from './social-icons';

function FooterLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <Box as="a">{children}</Box>
    </Link>
  );
}

export default function Footer() {
  return (
    <Box className="section" borderTop="1px solid" borderColor="maincolor.bordergray">
      <Box  className="wrapper">
        <SimpleGrid columns={{ base: 4, md: 12 }} spacing="16">
          <GridItem colSpan={6}>
            <Box>
              <Heading marginBottom="6" size="lg">
                call-n
              </Heading>
              <Text fontSize="lg" maxWidth="22rem">
                Passionate software engineer trying to learn as much about code and design
              </Text>
            </Box>

            <HStack marginTop="9" spacing={{ base: '8', md: '10' }}>
              <LinkItem href={siteConfig.profiles.github} icon={GithubIcon}>
                GitHub
              </LinkItem>
              <LinkItem href={siteConfig.profiles.twitter} icon={TwitterIcon}>
                Twitter
              </LinkItem>
              <LinkItem href={siteConfig.profiles.email} icon={EmailIcon}>
                Email
              </LinkItem>
            </HStack>
          </GridItem>

          <GridItem colSpan={3}>
            <Heading as="h2" marginBottom="6" size="lg">
              Contact
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href={siteConfig.profiles.email}>Email me!</FooterLink>
              <FooterLink href={siteConfig.profiles.email}>Join Discord</FooterLink>
            </Flex>
          </GridItem>

          <GridItem colSpan={3}>
            <Heading as="h2" marginBottom="6" size="lg">
              Links
            </Heading>
            <Flex direction="column" gap="4">
              <FooterLink href="/blog?filter=Firebase">Firebase</FooterLink>
              <FooterLink href="/blog?filter=Firestore">Firestore</FooterLink>
              <FooterLink href="/blog?filter=Custom-Hook">Custom hooks</FooterLink>
              <FooterLink href="/blog?filter=Auth">Firebase Auth</FooterLink>
            </Flex>
          </GridItem>
        </SimpleGrid>

        <Text marginTop="20">
          All rights reserved &copy; calo.dev {new Date().getFullYear()}
        </Text>
      </Box>
    </Box>
  );
}
