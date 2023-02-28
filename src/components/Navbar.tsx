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
    <Box>
      <ContainerComp>
        <Flex>
          <Box p={4} pl="0">
            <Image src={Logo} alt="logo axcelento" width="24"  />
          </Box>
          {
            menu.map((nav) => 
            <Button variant='navbar-link' className={raleway.className}>{nav.text}</Button>
            )
          }
        </Flex>
      </ContainerComp>
    </Box>
  )
};