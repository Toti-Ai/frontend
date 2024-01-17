'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'

// Assets

export default function Default() {
  // Chakra Color Mode

  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  return <Box bgColor={'white'}>ali</Box>
}
