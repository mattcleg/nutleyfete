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
        <div className="font-sans text-xl leading-normal bg-gray-100">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
    </>
  )
}

