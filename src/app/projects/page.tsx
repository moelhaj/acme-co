import React, { Suspense } from "react";
import { getProjects } from "@/actions/projects";
import ProjectList from "./components/projects-list";
import { getUsers } from "@/actions/users";
import ProjectsHeader from "./components/porjects-header";
import Loader from "@/components/loader";

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
	const { users } = await getUsers();

	return (
		<Suspense fallback={<Loader />}>
			<div className="p-4 sm:p-6">
				<ProjectsHeader projects={projects} users={users} />
				<ProjectList projects={projects} />
			</div>
		</Suspense>
	);
}
