import UnderDevelopment from "@/components/under-development";
import React from "react";
import { getProjects } from "@/actions/projects";

export default async function Projects() {
	const projects = await getProjects({ page: 1, limit: 10, query: "" });
	console.log(projects);
	return (
		<div>
			<UnderDevelopment />
		</div>
	);
}
