import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const cookie = await request.cookies.get("session");

	if (pathname === "/") {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	if (!protectedRoutes.includes(pathname) && pathname !== "/sign-in") {
		if (cookie) {
			return NextResponse.redirect(new URL("/dashboard", request.url));
		} else {
			return NextResponse.redirect(new URL("/sign-in", request.url));
		}
	}

	if (protectedRoutes.includes(pathname)) {
		if (!cookie) {
			return NextResponse.redirect(new URL("/sign-in", request.url));
		}
		return NextResponse.next();
	}

	if (pathname === "/sign-in") {
		if (cookie) {
			return NextResponse.redirect(new URL("/dashboard", request.url));
		}
		return NextResponse.next();
	}
	return NextResponse.next();
}

const protectedRoutes = ["/dashboard", "/projects", "/tasks", "/calendar", "/settings"];

export const config = {
	matcher: [
		"/dashboard/:path*",
		"/projects/:path*",
		"/tasks/:path*",
		"/calendar/:path*",
		"/settings/:path*",
		"/sign-in",
	],
};
