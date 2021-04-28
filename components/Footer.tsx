import React from 'react';
import {
  Youtube,
  Github,
  Twitter,
  Linkedin
} from '@icons-pack/react-simple-icons';
import { Flex, Link, HStack } from '@chakra-ui/react';

export const Footer = () => (
  <>
    <Flex as="footer" pb="4rem" pt="12rem">
      <HStack spacing="2em">
        <Link href="https://www.github.com/wrobersone/" isExternal>
          <Github size="2em" />
        </Link>
        <Link href="https://www.linkedin.com/in/william-robersone/" isExternal>
          <Linkedin size="2em" />
        </Link>
        <Link href="https://twitter.com/wilwesley" isExternal>
          <Twitter size="2em" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCv4-lqqA_8i4CywgI34K6Ow"
          isExternal
        >
          <Youtube size="2em" />
        </Link>
      </HStack>
    </Flex>
    <Link pb="10px" color="green.500" href="mailto:me@gabrielhicks.dev">
      me@gabrielhicks.dev
    </Link>
  </>
);
