import React from 'react'
import { FaAlignJustify } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='bg-black text-white flex items-end justify-between px-4 py-2'>

      <h1 className='text-3xl'>Web Tail</h1>
<FaAlignJustify className='hidden sm:flex'/>
      <nav className='space-x-4 sm:hidden'>
        <a href="" className='hover:bg-white hover:text-black px-2 py-2'>About</a>
        <a href="" className='hover:bg-white hover:text-black px-2 py-2'>Contact</a>

      </nav>


    </div>
  )
}

export default Header