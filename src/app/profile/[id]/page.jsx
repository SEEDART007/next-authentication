import React from 'react'

export default function profile({params}) {
  return (
    <div className='min-h-screen items-center justify-center flex text-6xl'>
    this is user profile 
    <div className='font-bold text-red-700'>{params.id}</div>
  </div>
  )
}
