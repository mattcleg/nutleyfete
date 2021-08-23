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
  <Flex as="nav" align="center" mb={5} padding="1.5rem" background="gray.300" color="black">
    <Flex align="center" justify="space-between" wrap="wrap">
      <Menu>
      <MenuButton>
        Menu
      </MenuButton>
      <MenuList>
          <MenuItem>
            <Link href='/'>
                  <a>Home</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href='/about'>
                  <a>About Us</a>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>    
    </Flex>
  </Flex>
  )
}

export default Header