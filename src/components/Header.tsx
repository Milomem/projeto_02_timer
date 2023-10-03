import { Scroll, Timer } from '@phosphor-icons/react'
import Logo from '../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className=" flex items-center justify-between">
      <img src={Logo} alt="" className=" ml-12" />
      <nav className=" flex gap-2 m-10">
        <NavLink to="/" title="Timer">
          <Timer className="  text-cinza-100 w-10 h-10 hover:border-b-verde-500 border-b-[3px] border-solid border-t-[3px] border-transparent" />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll className=" w-10 h-10 text-cinza-100 hover:border-b-verde-500 border-b-[3px] border-solid border-t-[3px] border-transparent" />
        </NavLink>
      </nav>
    </header>
  )
}
