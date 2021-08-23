import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'
import feteImage from '../public/images/nfhero.jpg'
import { Flex, Heading, Container, Box, Text, Grid, GridItem} from '@chakra-ui/layout'
import { Button, ButtonGroup } from "@chakra-ui/react"

const Home = ({data}) => {
  return (
    <>
      <Heading as="h1" size="4xl" padding="20">Testing Deployments</Heading>
      <Text padding="16">
        {data}
      </Text>
      <Grid h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2} >
          <Button size="lg" colorScheme="facebook">Book a stall</Button>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          egoiehgioehgoiewhwgoiewhoih
        </GridItem>
      </Grid>
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://baconipsum.com/api/?type=meat-and-filler`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}


export default Home