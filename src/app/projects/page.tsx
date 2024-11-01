import { getProjects } from "@/actions/projects";
import { getUsers } from "@/actions/users";
import Loader from "@/components/loader";
import UnderDevelopment from "@/components/under-development";
import { Suspense } from "react";
import NewProject from "./new-project";

type SearchParams = {
	p?: number;
	l?: number;
	q?: string;
};

export default async function Projects({ searchParams }: { searchParams: Promise<SearchParams> }) {
	const page = (await searchParams).p || 1;
	const limit = (await searchParams).l || 10;
	const query = (await searchParams).q || "";
	const projects = await getProjects({ page, limit, query });
	const users = await getUsers();
	console.log(projects);
	return (
		<Suspense fallback={<Loader />}>
			<div>
				<NewProject users={users} />
			</div>
			<UnderDevelopment />
		</Suspense>
	);
}
