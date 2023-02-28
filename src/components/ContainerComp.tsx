import { Box, Container } from '@chakra-ui/react'

type PropsType = {
  children: React.ReactElement,
  align: string
}

export const ContainerComp = (props: PropsType) => {
    const {children, align, ...rest} = props;
    
    return (
      <Box display="flex" justifyContent={align ?? 'center'}>
        <Container minW="container.lg" maxW='container.lg' {...rest}>
                {children}
        </Container>
      </Box>
    )
}