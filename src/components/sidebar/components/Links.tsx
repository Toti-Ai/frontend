import { Box, Button, Collapse, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import { IRoute } from 'types/navigation'
import { usePathname } from 'next/navigation'
import { FunctionComponent, memo, useCallback, useState } from 'react'

interface LinkItemProps {
  route: IRoute
  isActive: boolean
}

const LinkItem: FunctionComponent<LinkItemProps> = memo(({ route, isActive }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Box
        width={'100%'}
        pl={2}
        onClick={() => {
          setOpen(prev => !prev)
        }}
      >
        <HStack spacing={isActive ? '22px' : '26px'} py='5px' ps='10px'>
          <Flex w='100%' alignItems='center' justifyContent='center'>
            <Box

            // color={isActive ? activeIcon : textColor} me='18px'
            >
              {route.icon}
            </Box>
            <Text
              me='auto'
              // color={isActive ? activeColor : textColor}

              fontWeight={isActive ? 'bold' : 'normal'}
            >
              {route.name}
            </Text>
          </Flex>
          <Box
            h='36px'
            w='4px'
            // bg={isActive ? brandColor : 'transparent'}

            borderRadius='5px'
          />
        </HStack>
      </Box>

      <Collapse in={open} animateOpacity>
        <Box pl={2}>
          {route?.children?.map((item, index) => {
            return <LinkItem key={index} isActive route={item} />
          })}
        </Box>
      </Collapse>
    </>
  )
})

interface SidebarLinksProps {
  routes: IRoute[]
}

export function SidebarLinks(props: SidebarLinksProps) {
  const { routes } = props

  //   Chakra color mode
  const pathname = usePathname()

  let activeColor = useColorModeValue('gray.700', 'white')
  let inactiveColor = useColorModeValue('secondaryGray.600', 'secondaryGray.600')
  let activeIcon = useColorModeValue('brand.500', 'white')
  let textColor = useColorModeValue('secondaryGray.500', 'white')
  let brandColor = useColorModeValue('brand.500', 'brand.400')

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName: string) => {
      return pathname?.includes(routeName)
    },
    [pathname]
  )

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  return routes.map((route, index: number) => {
    return <LinkItem key={index} isActive route={route} />
  })
}

export default memo(SidebarLinks)
