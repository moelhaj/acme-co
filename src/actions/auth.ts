"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { compare } from "bcryptjs";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const signInSchema = z.object({
	email: z.string({
		invalid_type_error: "Invalid Email",
	}),
	password: z.string({
		invalid_type_error: "Invalid Password",
	}),
});

async function getUser(email: string): Promise<User | undefined> {
	try {
		const user = await prisma.user.findFirst({
			where: {
				email,
			},
		});
		if (!user) {
			return undefined;
		}
		return user;
	} catch (error) {
		console.error("Failed to fetch user:", error);
		throw new Error("Failed to fetch user.");
	}
}

export async function signIn(prevState: Record<string, unknown>, formData: FormData) {
	const validatedFields = signInSchema.safeParse({
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { email, password } = validatedFields.data;
	const user = await getUser(email);

	if (!user) {
		return {
			message: "Invalid credentials",
		};
	}

	const passwordsMatch = await compare(password, user.password);

	if (!passwordsMatch) {
		return {
			message: "Invalid credentials",
		};
	}

	user.password = "";

	const expires = new Date(Date.now() + 12 * 60 * 60 * 1000);
	const session = await encrypt({ user, expires });
	(await cookies()).set("session", session, { expires, httpOnly: true });
	redirect("/");
}

export async function signOut() {
	(await cookies()).set("session", "", { expires: new Date(0) });
	redirect("/");
}
