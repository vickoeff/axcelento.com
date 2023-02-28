import { Avatar, AvatarBadge, AvatarGroup, Box, Text } from '@chakra-ui/react'

type CustomerProps = {
    avatar: string,
    name: string,
    testimoni: string
}

export const CustomerItem = (props: CustomerProps) => {
  const {avatar, name, testimoni} = props;

  return (
    <Box margin="4" borderRadius="xl" textAlign="center"  p="6">
        <Avatar name={name} src={avatar} background="#ffea91" color="primary" p="6" px="7" mb="4" />
        <Text fontWeight="bold" fontSize="xl" color="primary" mb="2">{name}</Text>
      <Text>{testimoni}</Text>
    </Box>
  )
}