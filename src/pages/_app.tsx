import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  colors: {
    primary: '#3094b2',
    dark: '#0f3757',
  },
  components: {
    Button: {
      variants: {
        'navbar-link': {
          margin: '0rem 0.6rem',
          fontSize: 'sm'
        },
        'primary': {
          backgroundColor: '#3094b2',
          borderRadius: 'lg',
          padding: '8px 12px',
          color: 'white'
        }
      }
    },
    Badge: {
      variants: {
        'best-choice': {
          color: 'dark',
          backgroundColor: '#24ff5d',
          fontWeight: 'semibold',
          borderRadius: '30px',
          padding: ' 0.2rem 0.5rem'
        }
      }
    }
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}
