import {
  Box,
  Center,
  Circle,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Stack,
  StackDivider,
  StackProps,
  Text,
  useBreakpointValue,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ElementType, ReactNode, useEffect } from 'react';
import {
  BlogIcon,
  CloseIcon,
  HamburgerMenuIcon,
  ProjectIcon,
  SnippetIcon,
  TalksIcon,
} from './nav-icons';

type NavItemProps = {
  children: ReactNode;
  active?: boolean;
  icon: ElementType;
  href?: string;
  large?: boolean;
};

function NavItem(props: NavItemProps) {
  const { children, icon, active, href, large } = props;
  return (
    <Link href={href} passHref>
      <HStack
        as="a"
        spacing="2"
        paddingX="3"
        paddingY={large ? '5' : '2.5'}
        rounded="lg"
        aria-current={active ? 'page' : undefined}
        _hover={{ color: 'sage.base' }}
        _activeLink={{ bg: 'maincolor.midbg', border: '1px solid', borderColor: 'maincolor.bordergray' }}
      >
        <Icon as={icon} color="#FEB48C" fontSize="lg" />
        <Text fontFamily="heading">{children}</Text>
      </HStack>
    </Link>
  );
}

const items = [
  { label: 'Blog', href: '/blog', icon: BlogIcon },
  { label: 'Snippets', href: '/snippets', icon: SnippetIcon },
  { label: 'Projects', href: '/projects', icon: ProjectIcon },
  { label: 'Reviews', href: '/reviews', icon: TalksIcon },
];

function DesktopNavItemGroup(props: StackProps) {
  const { asPath } = useRouter();
  return (
    <HStack as="nav" aria-label="Main navigation" spacing="8" {...props}>
      {items.map((item) => (
        <NavItem
          key={item.label}
          href={item.href}
          icon={item.icon}
          active={asPath.startsWith(item.href)}
        >
          {item.label}
        </NavItem>
      ))}
    </HStack>
  );
}

function MobileNavItemGroup(props: StackProps) {
  return (
    <Stack
      divider={<StackDivider borderColor="whiteAlpha.300" />}
      as="nav"
      aria-label="Main navigation"
      spacing="0"
      {...props}
    >
      {items.map((item) => (
        <NavItem key={item.label} href={item.href} icon={item.icon} large>
          {item.label}
        </NavItem>
      ))}
    </Stack>
  );
}

function Headshot() {
  return (
    <Flex flexWrap="nowrap" gap="5px" justifyContent="flex-start" alignItems="center">
      <Link href="/" passHref>
        <a style={{height: "25px"}}>
          <Image src="/static/images/sitelogo1.png" alt="Logo for the site" width="125" height="25" />
        </a>
      </Link>
    </Flex>
  );
}

function MobileNavMenu() {
  const menu = useDisclosure();

  const breakpoint = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (menu.isOpen && !breakpoint) {
      menu.onClose();
    }
  }, [breakpoint, menu]);

  return (
    <Flex flexWrap="nowrap" gap="5px" justifyContent="flex-start" alignItems="center">
      <Center
        width="10"
        height="10"
        display={{ base: 'flex', md: 'none' }}
        as="button"
        aria-haspopup="true"
        aria-expanded={menu.isOpen}
        aria-controls="nav-menu"
        id="nav-menu--trigger"
        type="button"
        onClick={menu.onOpen}
      >
        {menu.isOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
      </Center>
      <Drawer isOpen={menu.isOpen} onClose={menu.onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent id="nav-menu" bg="maincolor.corebg" padding="6">
          <MobileNavItemGroup />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default function Navbar() {
  return (
    <Box as="header" display="flex" justifyContent="space-between" alignContent="center" minHeight="73px" fontSize="18px" color="maincolor.midtext" backgroundColor="maincolor.corebg" padding="0 clamp(1.375rem, 1.2rem + 0.89vw, 2rem)" borderBottom="1px solid" borderColor="maincolor.bordergray" lineHeight="1">
      <Headshot />
      <MobileNavMenu />
      <DesktopNavItemGroup display={{ base: 'none', md: 'flex' }} />
    </Box>
  );
}
