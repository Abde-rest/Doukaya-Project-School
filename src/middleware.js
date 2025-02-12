import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log(token);

  // if (req.nextUrl.pathname.startsWith("/Niveaux") && !isLoggedIn) {
  //   return NextResponse.redirect(new URL("/SignUp", req.url));
  // }
  if (!token) {
    return NextResponse.redirect(new URL("/SignUp", req.url));
  }
  // if (req.nextUrl.pathname.startsWith("/admin") && token.role !== "admin") {
  //   return NextResponse.redirect(new URL("/not-authorized", req.url));
  // }
  if (
    req.nextUrl.pathname.startsWith("/SignUp") ||
    (req.nextUrl.pathname.startsWith("/Login") && token)
  ) {
    return NextResponse.redirect(new URL("/Niveaux", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/Dashboard") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/Niveaux", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/Niveaux/:path*", "/Dashboard/:path*"],
};
