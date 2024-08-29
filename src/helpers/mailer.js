import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs'
import User from '@/app/models/userModel'



export const sendEmail = async({email,emailType,userId})=>{
try {
    //created  a hashed token 
  const hashedToken = await bcrypt.hash(userId.toString(),10)

  if(emailType==="VERIFY"){
    await User.findByIdAndUpdate(userId,{
        verifyToken:hashedToken,verifyTokenExpiry: Date.now()+360000
      })
  }else if(emailType==="RESET"){
    await User.findByIdAndUpdate(userId,{
        forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry: Date.now()+360000
      })
  }
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d3397cf3c5ca41",
      pass: "be77574a03ff74"
    }
  });
  const mailOptions = {
    from:'hitesh@gmail.com',
    to:email,
    subject: emailType==="VERIFY"?"verify your email":"reset password",
    html:`<p>Click <a href="http://localhost:3000/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> http://localhost:3000/verifyemail?token=${hashedToken}
            </p>`
  }

  const mailRes =  await transport.sendMail(mailOptions)
} catch (error) {
    throw new Error(error.message)
}
}