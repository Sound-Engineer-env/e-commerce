import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"
import { AiOutlineUser } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <div className='w-full bg-slate-100 z-10 shadow-sm'>
      <div className='py-4 border-b-[1px] d-flex justify-center'>
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <div className="flex items-center gap-5 text-slate-400">
              <Search />
              <AiOutlineUser size={26} />
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}