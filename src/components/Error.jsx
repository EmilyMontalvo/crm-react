import React from 'react'

const Error = ({children}) => {
  return (
    <div className='text-center text-white bg-red-600 font-bold p-3 uppercase mb-10'>
      {children}
    </div>
  )
}

export default Error
