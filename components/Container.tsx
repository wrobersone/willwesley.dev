import React, { ReactNode } from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Header } from './Header';

type Props = {
  children: ReactNode;
  type?: string;
  description?: string;
  title?: string;
  image?: string;
  date?: string;
  height?: string;
};

export const Container = (props: Props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'black', dark: 'blue.900' };

  const color = { light: 'white', dark: 'white' };

  const router = useRouter();
  const meta = {
    title: 'William Wesley - Front End Engineer',
    description:
      'William Wesley is a software engineer who specializes in building applications and websites using the latest technologies.',
    image: '/public/note.png', //1. change this soon
    type: 'website'
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://gabrielhicks.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="William Wesley" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gabrielhicksdev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <Header />
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      />
    </>
  );
};
