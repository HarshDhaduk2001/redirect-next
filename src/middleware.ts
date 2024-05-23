// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("this is middleware");

  // Check if the request is for the "source" page
  if (pathname === "/source") {
    const redirectUrl =
      process.env.RedirectURL ||
      "http://localhost:3000/destination";
    const res = NextResponse.redirect(new URL(redirectUrl, req.url), 308);
    return res;
  }

  return NextResponse.next();
}

// Specify which paths to run middleware on
export const config = {
  matcher: ["/source"],
};
