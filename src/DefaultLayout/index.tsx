import { Outlet } from 'react-router-dom'
import { Cover, LayoutContainer } from './styles'
import cover from '../assets/cover.svg'

export function DefaultLayout() {
  return (
    <>
      <Cover src={cover} alt="" />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
