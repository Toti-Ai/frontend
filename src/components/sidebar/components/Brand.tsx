// Chakra imports
import { HStack, Text, useColorModeValue } from '@chakra-ui/react'

// Custom components
import { HSeparator } from 'components/separator/Separator'
import Image from 'next/image'

export function SidebarBrand() {
  const logoColor = useColorModeValue('navy.700', 'white')

  return (
    <>
      <HStack alignItems='center' px={5}>
        <Image src={'/images/toti.png'} width={100} height={100} alt='logo' />
        <Text fontSize={'4xl'} color={'#121212'} fontWeight={700}>
          Toti AI
        </Text>
      </HStack>
      <HSeparator mb='20px' />
    </>
  )
}

export default SidebarBrand
