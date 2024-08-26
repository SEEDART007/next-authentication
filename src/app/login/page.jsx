'use client'
import { useState , React} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function page() {
    const handleLogin=async(e)=>{

    }
   const [user,setUser]=useState({
    email:"",
    password:""
   })
  return (
    <div className=' flex min-h-screen items-center justify-center flex-col space-y-4 '>
      <h1 className='text-blue-400 text-3xl font-bold'>Login page</h1>
      <label className='text-xl '>Email</label>
      <input className='focus:outline-none text-xl border-b border-slate-600 p-2' type='email' value={user.email} id='email' onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='email'/>
      <label className='text-xl '>Password</label>
      <input className='focus:outline-none text-xl border-b border-slate-600 p-2' type='password' value={user.password} id='password' onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='password'/>
      <button onClick={handleLogin} className='bg-green-400 text-white p-4 '>Submit</button>
      <Link className='font-extralight' href="/signup">Visit Signup Page</Link>
    </div>
  )
}

export default page
