import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export const getDataFromToken=async(request)=>{
try {
    const token = request.cookies.get("token")?.value||''
   const decodedToken = jwt.verify(token,"secret")
   return decodedToken.id
} catch (error) {
  throw new Error("whoops!!error")    
}
}