
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const path = request.nextUrl.pathname
  const isPublic = path ==='/login'||path==='/signup'
  const token = request.cookies.get('token')?.value||''
  if(isPublic&&token){
    return NextResponse.redirect(new URL('/',request.nextUrl))
  }
  if(!isPublic && !token){
    return NextResponse.redirect(new URL('/login',request.nextUrl))
  }
}
 
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup'
  ],
}