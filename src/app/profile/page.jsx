'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

function page() {
  const [user,setUser]=useState({
    username:"",
    email:""
  })
 const getData=async()=>{
  const res = await axios.get("/api/users/me")
  setUser({username:res.data.data.username,email:res.data.data.email})
  console.log("clicked")
 }
  const {push} = useRouter()
  const logout=async()=>{
try {
  await axios.get("/api/users/logout")
  push("/login")
  
} catch (error) {
  console.log(error)
  toast.error("failed to log out")
}
  }
  return (
    <div>
    <div className='min-h-screen items-center justify-center flex text-6xl flex-col space-y-6'>
      this is user profile
      <h1></h1>
  <button onClick={getData}>get data</button>
  <h1 className='text-amber-600'>{user.username}</h1>
  <h2 className='text-amber-700'>{user.email}</h2>
      <button onClick={logout} className='bg-red-700 text-white p-3 mt-5 rounded-md'>LogOut</button>
    
    </div>
    </div>
  )
}

export default page
