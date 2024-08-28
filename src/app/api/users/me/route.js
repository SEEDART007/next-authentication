import { getDataFromToken } from "@/helpers/getDataFromToken";
import  connect  from "../../../../dbconfig/dbConfig";
import { NextResponse } from "next/server";
import User from "@/app/models/userModel";




connect()
export async function GET(request) {
  try {
        const userId = await getDataFromToken(request);
      const user = await User.findOne({_id:userId}).select("-password")
      return NextResponse.json({
        message:"user found",
        data:user
      })
    } catch (error) {
        return NextResponse.json(error.message)
    }
}