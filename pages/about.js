import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import { Text, Heading } from '@chakra-ui/layout'

const About = ({data}) => {
  return (
    <>
        <Heading>About Us</Heading>
      <Text>
          {data}
      </Text>
    </>
  )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`)
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

export default About;