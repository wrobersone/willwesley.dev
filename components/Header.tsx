import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  Stack,
  Link,
  MenuDivider,
  MenuGroup
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  ChevronDownIcon,
  EmailIcon,
  ExternalLinkIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';

export const Header = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const menuToggle = useColorModeValue('black', 'white');

  return (
    <>
      <Stack
        as="nav"
        height="4.5rem"
        zIndex="10"
        width="100%"
        position="fixed"
        alignItems="left"
        justifyContent="center"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      >
        <Stack direction="row" p={4} spacing={1}>
          <NextLink href="/" passHref>
            <Button variant="outline" colorScheme="yellow">
              Home
            </Button>
          </NextLink>
          <Menu>
            <MenuButton
              colorScheme="yellow"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              About
            </MenuButton>
            <MenuList color={menuToggle}>
              <MenuGroup title="Social">
                <MenuItem
                  as={Link}
                  alt="Opens LinkedIn in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={'https://www.linkedin.com/in/william-robersone/'}
                  icon={<ExternalLinkIcon />}
                >
                  LinkedIn
                </MenuItem>
                <MenuItem
                  as={Link}
                  alt="Opens GitHub in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={'https://github.com/wrobersone/'}
                  icon={<ExternalLinkIcon />}
                >
                  GitHub
                </MenuItem>
                <MenuItem
                  as={Link}
                  alt="Opens Twitter in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={'https://twitter.com/wilwesley'}
                  icon={<ExternalLinkIcon />}
                >
                  Twitter
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Contact">
                <MenuItem
                  as={Link}
                  alt="Opens Resume in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={'https://williamwesley.vercel.app/wr_CV.pdf'}
                  icon={<ExternalLinkIcon />}
                >
                  Resume
                </MenuItem>
                <MenuItem
                  as={Link}
                  alt="Opens Email in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={'mailto:william.robersone@gmail.com'}
                  icon={<EmailIcon />}
                >
                  Email
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          {/* <NextLink href="/blog" passHref>
            <Button variant="outline" colorScheme="yellow">
              Blog
            </Button>
          </NextLink> */}
          <IconButton
            position="fixed"
            top="1rem"
            right="1rem"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </Stack>
      </Stack>
    </>
  );
};
