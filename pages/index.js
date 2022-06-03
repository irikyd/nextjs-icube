import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Homepage from '@/components/templates/homepage_v1';
import Head from 'next/head';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
          <title>Icube Training</title>
          <meta name="description" content="Training icube description" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <Box sx={{ height: '100vh', margin: '60px 0' }}>
          <Homepage />
        </Box>
      </Container>
    </React.Fragment>
  )
}
