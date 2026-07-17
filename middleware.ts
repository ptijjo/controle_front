import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Marqueur non sensible posé au login (défense UX — la vérité reste l’API JWT). */
const SESSION_FLAG = "controle_session";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/home")) {
    return NextResponse.next();
  }

  const hasSession = request.cookies.get(SESSION_FLAG)?.value === "1";
  if (!hasSession) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*"],
};
