import React from 'react';
import Image from 'next/image';
import { Box, Badge, Button, Divider, Link } from '@chakra-ui/react';
import { Airplayvideo, Youtube, Github } from '@icons-pack/react-simple-icons';

type Props = {
  image: string;
  title: string;
  video: boolean | string;
  frontend: boolean | string;
  backend: boolean | string;
  repo: boolean | string;
  tech: string[];
  description: string;
  website: boolean | string;
};

export const Project = ({
  image,
  title,
  video,
  frontend,
  backend,
  repo,
  tech,
  description,
  website
}: Props) => {
  return (
    <>
      <Box
        mx="2"
        my="2"
        maxW="sm"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
      >
        <Image width={1680} height={932} src={image} alt={title} />
        <Box
          d="flex"
          my="2"
          mx="2"
          alignItems="center"
          justifyContent="space-evenly"
        >
          {website ? (
            <Button
              colorScheme="yellow"
              alt="Opens in a new window"
              leftIcon={<Airplayvideo />}
              as={Link}
              target="_blank"
              rel="noreferrer"
              href={website}
            >
              Live
            </Button>
          ) : null}

          {video ? (
            <Button
              colorScheme="red"
              alt="Opens in a new window"
              leftIcon={<Youtube />}
              as={Link}
              target="_blank"
              rel="noreferrer"
              href={video}
            >
              Video
            </Button>
          ) : null}

          {frontend ? (
            <Button
              colorScheme="green"
              alt="Opens in a new window"
              leftIcon={<Github />}
              as={Link}
              target="_blank"
              rel="noreferrer"
              href={frontend}
            >
              Repo
            </Button>
          ) : null}

          {backend ? (
            <Button
              colorScheme="gray"
              alt="Opens in a new window"
              leftIcon={<Github />}
              as={Link}
              target="_blank"
              rel="noreferrer"
              href={backend}
            >
              Back
            </Button>
          ) : null}

          {repo ? (
            <Button
              colorScheme="blue"
              alt="Opens in a new window"
              leftIcon={<Github />}
              as={Link}
              target="_blank"
              rel="noreferrer"
              href={repo}
            >
              Front
            </Button>
          ) : null}
        </Box>

        <Box p="6" pt="0">
          <Box pt="0" fontWeight="bold" as="h3" lineHeight="tight">
            {title}
            <Divider role="separator" orientation="horizontal" />
          </Box>

          <Box d="flex-end" pb="2" alignItems="baseline">
            {tech.map((each: string) => (
              <Badge
                key={each}
                borderRadius="full"
                px="2"
                mr="2px"
                fontSize="0.6em"
                colorScheme="yellow"
              >
                {each}
              </Badge>
            ))}
          </Box>

          <Box>{description}</Box>
        </Box>
      </Box>
    </>
  );
};
