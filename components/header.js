import Link from 'next/link'
import { Flex, Container, Nav } from '@chakra-ui/layout'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"


const Header = () => {
  return (
          <>
            <Link href='/'>
                  <a>Home</a>
            </Link>
            <Link href='/about'>
                  <a>About Us</a>
            </Link>
          </>
  )
}

export default Header