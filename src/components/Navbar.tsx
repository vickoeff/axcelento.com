import { Box, Container, Flex, Button } from '@chakra-ui/react'
import { Raleway } from '@next/font/google'
import Image from 'next/image';
import Logo from '../../public/logo.png'
import { ContainerComp } from '@/components'

const raleway = Raleway({ subsets: ['latin'], weight: '400' })

const menu = [
  {
    text: 'About',
    link: '',
  },
  {
    text: 'Portfolio',
    link: '',
  },
  {
    text: 'Packages',
    link: '',
  },
  {
    text: 'Clients',
    link: '',
  },
  {
    text: 'Contact Us',
    link: '',
  }
]

export const Navbar = () => {
  return (
    <Box pos="sticky" top="0" zIndex="1024" p="6">
      <ContainerComp>
        <Flex justifyContent="flex-end">
          {
            menu.map((nav) => 
            <Button variant='navbar-link' color="white" className={raleway.className}>{nav.text}</Button>
            )
          }
        </Flex>
      </ContainerComp>
    </Box>
  )
};