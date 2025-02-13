import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // ✅ استثناء API routes
  if (req.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const protectedRoutes = ["/Niveaux", "/Dashboard"];

  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/SignUp", req.url));
  }

  if (["/SignUp", "/Login"].includes(req.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL("/Niveaux", req.url));
  }

  if (
    req.nextUrl.pathname.startsWith("/Dashboard") &&
    (!token || token.role !== "admin")
  ) {
    return NextResponse.redirect(new URL("/Niveaux", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Niveaux/:path*", "/Dashboard/:path*", "/SignUp", "/Login"],
};
