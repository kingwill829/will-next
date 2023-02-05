import React from 'react'
import Link from 'next/link'
import Script from 'next/script'

export default function Footer() {
  return (
    <div className="footer text-[#BCA9B0] bg-[#efefef] mt-4 p-4 text-center">
      <div className=''> 
        <Link href="https://www.linkedin.com/in/willking829/">
          <i className="fa-brands fa-linkedin text-5xl pr-4"></i>
        </Link>  
        <Link href="https://twitter.com/will_kingseo">
          <i className="fa-brands fa-square-twitter text-5xl	"></i>
        </Link>            
      </div>
    </div>
  )
}