"use server";
// import { unstable_noStore as noStore } from "next/cache";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Project } from "@/lib/types";

export async function getProjects({ page = 1, limit = 10, query = "" }) {
	try {
		const offset = (page - 1) * limit;
		const projects = await prisma.project.findMany({
			where: {
				title: {
					contains: query,
				},
			},
			orderBy: {
				createdAt: "desc",
			},
			include: {
				users: true,
				issues: true,
			},
			take: limit,
			skip: offset,
		});

		// const projects = await prisma.$queryRaw`SELECT
		//     p.*,
		//     u.*,
		//     COUNT(i.id) FILTER (WHERE i.status = 'OPEN') AS open_issues_count,
		//     COUNT(i.id) FILTER (WHERE i.status = 'CLOSED') AS closed_issues_count,
		//     COUNT(i.id) FILTER (WHERE i.status = 'IN_PROGRESS') AS in_progress_issues_count,
		//     COUNT(i.id) FILTER (WHERE i.status = 'IN_REVIEW') AS in_review_issues_count,
		//     COUNT(i.id) FILTER (WHERE i.status = 'RESOLVED') AS resolved_issues_count
		// FROM
		//     "Project" p
		// LEFT JOIN
		//     "User" u ON u.projectId = p.id
		// LEFT JOIN
		//     "Issue" i ON i.projectId = p.id
		// WHERE
		//     p.title LIKE '%' || ${query} || '%'
		// GROUP BY
		//     p.id, u.id
		// LIMIT
		//     ${limit}
		// OFFSET
		//     ${offset}`;
		return projects;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch projects");
	}
}

export async function createProject(data: Omit<Project, "id">) {
	// try {
	// 	const project = await prisma.project.create({
	// 		data,
	// 	});
	// 	revalidatePath("/projects");
	// 	return project;
	// } catch (error) {
	// 	console.error("Database Error:", error);
	// 	throw new Error("Failed to create project");
	// }
	console.log(data);
	return true;
}

// export async function deleteProject(id: string) {
// 	try {
// 		await sql`DELETE FROM projects WHERE id = ${id}`;
// 		revalidatePath("/projects");
// 	} catch (error) {
// 		console.error("Database Error:", error);
// 		throw new Error("Failed to delete project");
// 	}
// }
