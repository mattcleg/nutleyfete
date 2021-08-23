import Link from 'next/link'

const Footer = () => {
  return (
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
  )
}

export default Footer;