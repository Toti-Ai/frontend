// chakra imports
import { Flex, Stack } from '@chakra-ui/react'
//   Custom components
import Brand from 'components/sidebar/components/Brand'
import Links from 'components/sidebar/components/Links'
import { IRoute } from 'types/navigation'

// FUNCTIONS

interface SidebarContentProps {
  routes: IRoute[]
}

function SidebarContent(props: SidebarContentProps) {
  const { routes } = props
  return (
    <Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
      <Brand />

      <Stack direction='column' mt='8px' mb='auto'>
        <Links routes={routes} />
      </Stack>
    </Flex>
  )
}

export default SidebarContent
