import { Box, Input, SimpleGrid, Text, Textarea } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface WispherLangDetectionProps {}

const WispherLangDetection: FunctionComponent<WispherLangDetectionProps> = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing={10} height={'100%'}>
        <Box>
          <Text>Lorem, ipsum dolor.</Text>
          <Textarea minH={300} />
        </Box>

        <Box>reza</Box>
      </SimpleGrid>
    </>
  )
}

export default WispherLangDetection
