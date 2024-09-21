import React, { Suspense } from "react";
import { getProjects } from "@/actions/projects";
import ProjectsList from "./components/projects-list";
import ProjectHeader from "./components/projects-header";

type SearchParams = {
	page?: number;
	limit?: number;
	query?: string;
};

export default async function Projects({ searchParams }: { searchParams: SearchParams }) {
	const page = searchParams?.page || 1;
	const limit = searchParams?.limit || 10;
	const query = searchParams?.query || "";
	const { projects } = await getProjects({ page, limit, query });

	console.log(projects);
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="p-6">
				<ProjectHeader />
				<ProjectsList projects={projects} />
			</div>
		</Suspense>
	);
}
