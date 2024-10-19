// import { getProjects } from "@/actions/projects";
// import { getUsers } from "@/actions/users";
// import Loader from "@/components/loader";
// import { Suspense } from "react";
// import ProjectsList from "./components/projects-list";
import UnderDevelopment from "@/components/under-development";

type SearchParams = {
	page?: number;
	limit?: number;
	query?: string;
};

export default async function Projects({ searchParams }: { searchParams: SearchParams }) {
	console.log(searchParams);
	// const page = searchParams?.page || 1;
	// const limit = searchParams?.limit || 10;
	// const query = searchParams?.query || "";
	// const { projects } = await getProjects({ page, limit, query });
	// const { users } = await getUsers();

	return (
		// <Suspense fallback={<Loader />}>
		// 	<ProjectsList projects={projects} users={users} />
		// 	<div className="sm:hidden h-16 w-full" />
		// </Suspense>
		<div>
			<UnderDevelopment />
		</div>
	);
}
