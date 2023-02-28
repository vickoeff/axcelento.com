import { chakra, Box } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
})

export const ScrollIcon = () => {
  return (
    <Box width="28px" height="46px" border="2px solid black" borderRadius="40px" margin="0 auto">
      <ChakraBox
      display="flex"
        position="relative" 
        width="12px" 
        height="12px" 
        left="4px"
        borderRadius="full" 
        background="black"
        animate={{
          top: ['4px', '16px', '4px'],
          rotate: [0, 270, 270, 0]
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        bgGradient="linear(to-l, #3195b3, #2f397e)"
        justifyContent="center"
        alignItems="center"></ChakraBox>
      </Box>
    )
}