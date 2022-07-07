import { Box } from '@chakra-ui/react';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import React from 'react';

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box backgroundColor="maincolor.corebg">
      <Navbar />
        <Box as="main" id="content" position="relative" zIndex={1}>
          {children}
        </Box>
      <Footer />
    </Box>
  );
}
