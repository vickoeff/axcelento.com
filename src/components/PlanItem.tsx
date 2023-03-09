import { useMemo } from 'react'
import {HStack, VStack, Badge, Flex, Box, Heading, Text, List, ListItem, Button, ListIcon} from '@chakra-ui/react'
import toRupiah from '@/utils/currency';
import {FaCheckCircle} from 'react-icons/fa'

type PlanItemProps = {
  name: string;
  price: number;
  features: string[];
  isPriority: boolean;
}

export const PlanItem = (props: PlanItemProps) => {
  const {name, price, features, isPriority} = props;

  const priorityStyles = useMemo(() => {
    return isPriority ?
    {
      backgroundColor: 'dark',
      color: '#24ff5d'
    } :
    {
      backgroundColor: 'white'
    }
  }, [isPriority]);

  return (
    <Box w="full" minH="500" border='1px' position="relative" borderColor='gray.200' p='6' borderRadius='2xl' {...priorityStyles} _hover={{
      transform: "translateY(-3rem)",
      transition: "0.7s"
    }}>
        <HStack justifyContent="space-between" mb="4">
          <Heading as="h3" fontWeight="600" fontSize="xl">{name}</Heading>
        
          {isPriority ? <Badge ml='1' fontSize='0.8em' variant='best-choice'>
            Best Choice
          </Badge> : null}
        </HStack>
        <Flex alignItems="end" mb="6">
          <Text fontSize="5xl" fontWeight="bold">{toRupiah(price).slice(0, -3)}</Text>
          <Text fontSize="xl">{toRupiah(price).slice(-3)}</Text>
        </Flex>
        <Button w="full" fontWeight="semibold" border="1px" borderRadius="lg" backgroundColor={isPriority ? "#24ff5d" : "dark"} color={isPriority ? "dark": "white"} py="3" mb="3">Choose This</Button>
        <Button w="full" fontWeight="semibold" border="1px" borderRadius="lg" py="3" mb="5">Contact Us</Button>
        <Text fontSize="xl" fontWeight="bold">Features:</Text>
        <List>
          {features?.map((feature, idx) => (
              <ListItem fontSize="xl" key={idx}>
                <ListIcon as={FaCheckCircle} /> {feature}
              </ListItem>
          ))}
        </List>
    </Box>
  )
}