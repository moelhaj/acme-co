"use server";
import { sql } from "@vercel/postgres";
// import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

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

export async function createProject(data: Omit<Project, "id">) {
	try {
		const { title, details, status, members } = data;
		await sql`
            INSERT INTO projects (title, details, status, members)
			VALUES (${title}, ${details}, ${status}, ${members})
        `;
		revalidatePath("/projects");
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to create project");
	}
}

export async function deleteProject(id: string) {
	try {
		await sql`DELETE FROM projects WHERE id = ${id}`;
		revalidatePath("/projects");
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to delete project");
	}
}
