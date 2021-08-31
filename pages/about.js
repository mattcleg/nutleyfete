import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'

const About = ({data}) => {
  return (
    <>
      <h2>About Us</h2>
          {data}
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