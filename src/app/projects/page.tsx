import { getProjects } from "@/actions/projects";
import { getUsers } from "@/actions/users";
import Loader from "@/components/loader";
import { Suspense } from "react";
import ProjectsList from "./projects-list";

type SearchParams = {
	page?: number;
	limit?: number;
	query?: string;
};

export default async function Projects({ searchParams }: { searchParams: SearchParams }) {
	const page = searchParams?.page || 1;
	const limit = searchParams?.limit || 10;
	const query = searchParams?.query || "";
	const projectsData = await getProjects({ page, limit, query });
	if (!projectsData) {
		throw new Error("Failed to fetch projects");
	}
	const { projects: rawProjects, count } = projectsData;
	const projects = rawProjects.map(project => ({
		id: project.id,
		title: project.title,
		details: project.details,
		status: project.status,
		members: project.members,
	}));
	const { users } = await getUsers();

	return (
		<Suspense fallback={<Loader />}>
			<ProjectsList count={count} projects={projects} users={users} />
			<div className="sm:hidden h-16 w-full" />
		</Suspense>
	);
}
