import React from 'react'

function Content({children}) {
  return (
    <div className="content min-h-screen w-4/5 lg:w-3/5 mx-0 mx-auto">
        {children}
    </div>
  )
}

export default Content