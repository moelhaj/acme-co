import React from "react";
import ProjectsToolbar from "./projects-toolbar";

export default function ProjectsList({ projects, users }: { projects: Project[]; users: User[] }) {
	console.log(projects, users);
	return (
		<div>
			<ProjectsToolbar />
		</div>
	);
}
