import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {
  return (
    <div className="header bg-[#890C3B] text-[#efefef] mb-4">
      <div className="content md:w-3/5 mx-0 mx-auto flex justify-between items-center p-4">
        <Link href="/" className='text-[#efefef]'>
          WILL KING DIGITAL
        </Link>
        {/*<Navbar></Navbar>*/}
      </div>
    </div>
  )
}
