'use client'
import { useState , React} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function page() {
    const handleOnClick=async(e)=>{

    }
   const [user,setUser]=useState({
    username:"",
    email:"",
    password:""
   })
  return (
    <div className=' flex min-h-screen items-center justify-center flex-col space-y-4 '>
      <h1 className='text-black text-3xl font-bold'>Signup page</h1>
      <label className='text-xl mt-6'>Username</label>
      <input className=' focus:outline-none text-xl border-b border-slate-600 p-2' type='text' value={user.username} id='username' onChange={(e)=>setUser({...user,username:e.target.value})} placeholder='username'/>
      <label className='text-xl '>Email</label>
      <input className='focus:outline-none text-xl border-b border-slate-600 p-2' type='email' value={user.email} id='email' onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='email'/>
      <label className='text-xl '>Password</label>
      <input className='focus:outline-none text-xl border-b border-slate-600 p-2' type='password' value={user.password} id='password' onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='password'/>
      <button onClick={handleOnClick} className='bg-slate-700 text-white p-4 '>Submit</button>
      <Link className='font-extralight' href="/login">Visit Login Page</Link>
    </div>
  )
}

export default page
