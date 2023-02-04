import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {
  return (
    <div className="header bg-[#1f203a] text-[#efefef]">
      <div className="content p-4 text-center">
        <Link href="/" className='text-[#efefef]'>
          WILL KING DIGITAL
        </Link>
        {/*<Navbar></Navbar>*/}
      </div>
    </div>
  )
}
