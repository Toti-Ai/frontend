import { Icon } from '@chakra-ui/react'
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart } from 'react-icons/md'

import { IRoute } from 'types/navigation'

const routes: IRoute[] = [
  {
    name: 'Home',
    path: '/home',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />
  },
  {
    name: 'ASR',
    path: '/nft-marketplace',
    icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
    secondary: true,
    children: [
      {
        name: 'Home',
        path: '/home',
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />
      }
    ]
  },
  {
    name: 'Data Tables',
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: '/data-tables'
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />
  },
  {
    name: 'Sign In',
    path: '/sign-in',
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />
  },
  {
    name: 'RTL Admin',
    path: '/rtl-default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />
  }
]

export default routes
