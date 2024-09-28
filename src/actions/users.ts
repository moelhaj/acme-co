"use server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getUsers() {
	const data = await sql<User>`SELECT * FROM users`;
	return { users: data.rows };
}
