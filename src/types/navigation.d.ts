import { ReactComponentElement } from 'react'

export interface IRoute {
  name: string
  icon: ReactComponentElement | string
  secondary?: boolean
  path: string
  children?: IRoute[]
}
