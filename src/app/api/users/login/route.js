import { NextRequest, NextResponse } from 'next/server'
import connect from '../../../../dbconfig/dbConfig'
import User from '../../../models/userModel'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect();

export async function POST(request) {
   try {
    const reqBody = await request.json();
    const {email,password}=reqBody;
   const user = await User.findOne({email})
   if(!user){
    return NextResponse.json({message:"no user found"})
   }

   const validPassword = await bcrypt.compare(password,user.password)
   if(!validPassword){
    return NextResponse.json({message:"invalid password"},{status:400})
   }
   const TokenData={
    id:user._id,
    username:user.username,
    email:user.email,
   }
   const token =await jwt.sign(TokenData,"secret",{expiresIn:'1d'})
   const response = NextResponse.json({
    message:"login successfull",
    success:true
   })
   response.cookies.set("token",token,{httpOnly:true});
   return response
   } catch (error) {
    return NextResponse.json({message:"there is an error occured",error})
   }
}

