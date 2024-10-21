"use server";
import { sql } from "@vercel/postgres";
// import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export async function getProjects({ page = 1, limit = 10, query = "" }) {
	try {
		const offset = (page - 1) * limit;
		const data = await sql`
    WITH project_members AS (
        SELECT 
            p.id AS project_id,
            ARRAY_AGG(u.*) AS members -- Aggregate the user rows into an array
        FROM 
            projects p
        JOIN 
            LATERAL (
                SELECT * 
                FROM users 
                WHERE id = ANY(string_to_array(p.members, ', ')::uuid[])
            ) u ON true
        GROUP BY p.id
    ),
    issues_status_count AS (
        SELECT 
            i.project_id,
            COUNT(CASE WHEN i.status = 'to do' THEN 1 END) AS todo_count,
            COUNT(CASE WHEN i.status = 'in progress' THEN 1 END) AS in_progress_count,
            COUNT(CASE WHEN i.status = 'in review' THEN 1 END) AS in_review_count,
            COUNT(CASE WHEN i.status = 'done' THEN 1 END) AS done_count
        FROM 
            issues i
        GROUP BY i.project_id
    )
    SELECT 
        p.id AS id,
        p.title AS title,
        p.details,
        p.status,
        p.timestamp,
        p.members,
        COALESCE(isc.todo_count, 0) AS todo_count,
        COALESCE(isc.in_progress_count, 0) AS in_progress_count,
        COALESCE(isc.in_review_count, 0) AS in_review_count,
        COALESCE(isc.done_count, 0) AS done_count
    FROM 
        projects p
    LEFT JOIN 
        project_members pm ON p.id = pm.project_id
    LEFT JOIN 
        issues_status_count isc ON p.id = isc.project_id
    WHERE 
        p.title LIKE ${`%${query}%`}
    ORDER BY 
        p.timestamp DESC
    LIMIT ${limit} OFFSET ${offset};
    `;
		return { projects: data.rows, count: data.rowCount };
	} catch (error) {
		console.log(error);
	}
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
