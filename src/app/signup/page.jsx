'use client'
import { useState , React, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast, Toaster } from 'react-hot-toast'

function page() {
  const router = useRouter()
  const[loading,setLoading]=useState(false)
  const [user,setUser]=useState({
    username:"",
    email:"",
    password:""
   })
  const[buttonDisabled,setButtonDisabled]=useState(false);
  useEffect(()=>{
if(user.email.length>0&&user.username.length>0&&user.password.length>0){
  setButtonDisabled(false)
}else{
  setButtonDisabled(true)
}
  },[user])
    const handleOnClick=async(e)=>{
      try {
        setLoading(true)
        const data = await axios.post("/api/users/signup",user);
        setLoading(false)
        toast("Hurray!!You successfully signed up!!")
        router.push("/login")

      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoading(false)
      }

    }

  return (
    <div className=' flex min-h-screen items-center justify-center flex-col space-y-4 '>
      <h1 className='text-black text-3xl font-bold'>{loading?"Processing...":"Sign Up"}</h1>
      <label className='text-xl mt-6'>Username</label>
      <input className=' focus:outline-none text-xl border-b border-slate-600 p-2' type='text' value={user.username} id='username' onChange={(e)=>setUser({...user,username:e.target.value})} placeholder='username'/>
      <label className='text-xl '>Email</label>
      <input className='focus:outline-none text-xl border-b border-slate-600 p-2' type='email' value={user.email} id='email' onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='email'/>
      <label className='text-xl '>Password</label>
      <input className='focus:outline-none text-xl border-b border-slate-600 p-2' type='password' value={user.password} id='password' onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='password'/>
      <div>
      <button onClick={handleOnClick} className='bg-slate-700 text-white p-4 '>{buttonDisabled?"No SignUp":"SignUp"}</button>
      <Toaster/>
      </div>
      <Link className='font-extralight' href="/login">Visit Login Page</Link>
    
    </div>
  )
}

export default page
