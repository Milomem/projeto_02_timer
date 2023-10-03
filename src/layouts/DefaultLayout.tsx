import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className=" flex flex-col min-w-[74rem] min-h-[77vh] mx-40 my-20 bg-cinza-800 rounded-lg">
      <Header />
      <Outlet />
    </div>
  )
}
