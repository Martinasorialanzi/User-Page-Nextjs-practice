import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-400 flex justify-between items-center px-20 p-3 mb-4 font-bold text-black'>
      <Link href="/" >Home</Link>  
      <ul>
        <li>
            <Link href="/about" >About</Link>
        </li>
      </ul>
    </nav> 
      
  )
}

export default Navbar