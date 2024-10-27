"use server";
// import { unstable_noStore as noStore } from "next/cache";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function getProjects({ page = 1, limit = 10, query = "" }) {
	try {
		const offset = (page - 1) * limit;
		const projects = await prisma.project.findMany({
			where: {
				title: {
					contains: query,
				},
			},
			take: limit,
			skip: offset,
		});
		return projects;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch projects");
	}
}

// export async function createProject(data: Omit<Project, "id">) {
// 	try {
// 		const project = await prisma.project.create({
// 			data: {
// 				...data,
// 				members: {
// 					connect: data.members.map(member => ({ id: member.id })),
// 				},
// 			},
// 		});
// 		revalidatePath("/projects");
// 		return project;
// 	} catch (error) {
// 		console.error("Database Error:", error);
// 		throw new Error("Failed to create project");
// 	}
// }

// export async function deleteProject(id: string) {
// 	try {
// 		await sql`DELETE FROM projects WHERE id = ${id}`;
// 		revalidatePath("/projects");
// 	} catch (error) {
// 		console.error("Database Error:", error);
// 		throw new Error("Failed to delete project");
// 	}
// }
