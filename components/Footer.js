import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="footer text-[#BCA9B0] bg-[#efefef] mt-4 p-2 text-center">
      <div className=''> 
        <Link href="https://www.linkedin.com/in/willking829/">
          <i className="fa-brands fa-linkedin text-3xl pr-2"></i>
        </Link>  
        <Link href="https://twitter.com/will_kingseo">
          <i className="fa-brands fa-square-twitter text-3xl	"></i>
        </Link>            
      </div>
    </div>
  )
}
