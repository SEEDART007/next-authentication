'use client'
import { useState , React, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function page() {
  const {push}= useRouter()
  const[disableBtn,setDisableBtn]=useState(false)
  const[loading,setLoading]=useState(false)
    const handleLogin=async(e)=>{
        try {
          setLoading(true);
          const res = await axios.post("/api/users/login",user)
          setLoading(false)
          push("/profile")
          
        } catch (error) {
          console.log(error)
        }finally{
          setLoading(false)
        }
    }
   const [user,setUser]=useState({
    email:"",
    password:""
   })
   useEffect(()=>{
      if(user.email.length>0 && user.password.length>0){
        setDisableBtn(false)
      }else{
        setDisableBtn(true)
      }
   },[user])
  return (
    <div className=' flex min-h-screen items-center justify-center flex-col space-y-4 '>
      <h1 className='text-blue-400 text-3xl font-bold'>{loading?"Processing...":"Login Page"}</h1>
      <label className='text-xl '>Email</label>
      <input className='focus:outline-none text-xl border-b border-slate-600 p-2' type='email' value={user.email} id='email' onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='email'/>
      <label className='text-xl '>Password</label>
      <input className='focus:outline-none text-xl border-b border-slate-600 p-2' type='password' value={user.password} id='password' onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='password'/>
      <button onClick={handleLogin} className='bg-green-400 text-white p-4 '>{disableBtn?"Can't Login":"Login"}</button>
      <Link className='font-extralight' href="/signup">Visit Signup Page</Link>
    </div>
  )
}

export default page
