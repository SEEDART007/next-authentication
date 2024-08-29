import { NextRequest, NextResponse } from 'next/server'
import connect from '../../../../dbconfig/dbConfig'
import User from '../../../models/userModel'
import bcrypt from 'bcryptjs'
import { sendEmail } from '@/helpers/mailer'
export  async function POST(request) {
    try {
        connect()
        const reqBody = await request.json()
        const {username,email,password}=reqBody
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({message:"user already exist, try to login!!"})
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser =await User.create({username,email,password:hashedPassword})

        await sendEmail({email,emailType:"VERIFY",userId:newUser._id})

        return NextResponse.json({newUser})

    } catch (error) {
        return NextResponse.json({message:"error occured"})
    }
}