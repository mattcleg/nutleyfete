import Link from 'next/link'

const Footer = () => {
  return (
    <Flex as="nav" align="center" mb={5} padding="1.5rem" background="gray.300" color="black"> 
      <Flex align="center" justify="space-between" wrap="wrap">
        <footer>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </footer>
      </Flex>
    </Flex>
  )
}

export default Footer;