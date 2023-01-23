import React from 'react'

function Navbar() {
const navItems = [
    {link : "#", anchor: "About"},
    {link : "#", anchor: "Contact"}
    ];

  return (
    <div>
        <ul>
          <li className="inline ml-2">About</li>
          <li className="inline ml-2">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar