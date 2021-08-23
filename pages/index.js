import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'
import feteImage from '../public/images/nfhero.jpg'

const Home = ({data}) => {
  return (
    <>
        {data}
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