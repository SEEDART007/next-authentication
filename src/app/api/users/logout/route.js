import { NextResponse } from "next/server";



export async function GET(request) {
   try {
    const response= NextResponse.json({
        message:"logout successful",
        success:true,
    })

    response.cookies.set("token","",{httpOnly:true},{expires:new Date(0)});
    return response;
   } catch (error) {
    return NextResponse.json({
        message:"logout failed",
        success:false
    })
   }
}