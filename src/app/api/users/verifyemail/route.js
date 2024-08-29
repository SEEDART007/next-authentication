import { NextResponse } from 'next/server';
import connect from  '../../../../dbconfig/dbConfig'
import User from '@/app/models/userModel';



connect();

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const {token}=reqBody;
     const user =   await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})

     if(!user){
        return NextResponse.json({message:"Invalid Token"},{status:404})
     }

     user.isVerified  = true
     user.verifyToken=undefined
     user.verifyTokenExpiry=undefined

     await user.save()

     return NextResponse.json({
        message:"email verified successfully",
        success:true
     })
    } catch (error) {
        return NextResponse.json({message:error.message},{status:500})
    }
    
}