'use client'
// Chakra imports
import { Box, useDisclosure, useColorModeValue } from '@chakra-ui/react'
// Layout components
import Navbar from 'components/navbar/NavbarAdmin'
import Sidebar from 'components/sidebar/Sidebar'
import { SidebarContext } from 'contexts/SidebarContext'
import { PropsWithChildren, useState } from 'react'
import routes from 'routes'
import { getActiveNavbar, getActiveNavbarText, getActiveRoute } from 'utils/navigation'

interface DashboardLayoutProps extends PropsWithChildren {
  [x: string]: any
}

// Custom Chakra theme
export default function AdminLayout(props: DashboardLayoutProps) {
  const { children, ...rest } = props
  // states and functions
  const [fixed] = useState(false)
  const [toggleSidebar, setToggleSidebar] = useState(false)
  // functions for changing the states from components
  const { onOpen } = useDisclosure()

  const bg = useColorModeValue('secondaryGray.300', 'navy.900')

  return (
    <Box h='100dvh' w='100vw' bg={bg}>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar
        }}
      >
        <Sidebar routes={routes} display='none' {...rest} />

        <Box
          float='right'
          minHeight='100vh'
          height='100%'
          overflow='auto'
          position='relative'
          maxHeight='100%'
          w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
          maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
          transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
          transitionDuration='.2s, .2s, .35s'
          transitionProperty='top, bottom, width'
          transitionTimingFunction='linear, linear, ease'
        >
          <Box mx='auto' py={{ base: '20px', md: 30 }} px={50} height={'100%'} pe='20px'>
            <Navbar
              onOpen={onOpen}
              logoText={'Horizon UI Dashboard PRO'}
              brandText={getActiveRoute(routes)}
              secondary={getActiveNavbar(routes)}
              message={getActiveNavbarText(routes)}
              fixed={fixed}
              {...rest}
            />

            {/* page content */}
            {children}
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  )
}
