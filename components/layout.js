import { Container, Box } from '@chakra-ui/layout'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout ({ children }) {
  return (
    <>
      <Head>
        <title>Nutley Fete</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Container maxW="container.lg">
        <Box marginBottom="1.5rem">
          <main>{children}</main>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
