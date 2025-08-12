import React from 'react'

function Card({children}) {
  return (
    <div className='p-4 bg-white shadow-sm rounded-lg'>
     {children}
    </div>
  )
}

export default Card