"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const key = new TextEncoder().encode(process.env.SECRET);

export async function encrypt(payload: Record<string, unknown>) {
	if (!process.env.SECRET) {
		throw new Error("No secret found");
	}
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("12 hours")
		.sign(key);
}

export async function decrypt(input: string): Promise<Record<string, unknown>> {
	const { payload } = await jwtVerify(input, key, {
		algorithms: ["HS256"],
	});
	return payload;
}

export async function getSession() {
	const session = (await cookies()).get("session")?.value;
	if (!session) return null;
	return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
	const session = request.cookies.get("session")?.value;
	if (!session) return;

	const parsed = await decrypt(session);
	parsed.expires = new Date(Date.now() + 12 * 60 * 60 * 1000);
	const res = NextResponse.next();
	res.cookies.set("session", await encrypt(parsed), {
		httpOnly: true,
		expires: parsed.expires as Date,
	});
	return res;
}
