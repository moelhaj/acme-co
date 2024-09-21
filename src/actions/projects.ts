"use server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getProjects({ page = 1, limit = 10, query = "" }) {
	const offset = (page - 1) * limit;
	const data = await sql<Project>`
        SELECT * FROM projects
        WHERE
            title LIKE ${`%${query}%`}
        ORDER BY timestamp DESC
        LIMIT ${limit} OFFSET ${offset}
    `;
	return { projects: data.rows };
}
