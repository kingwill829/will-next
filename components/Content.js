import React from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Content({children}) {
  return (
    <main className='content'>
        {children}
    </main>
  )
}

export default Content