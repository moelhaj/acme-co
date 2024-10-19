import React from "react";
import ProjectsToolbar from "./projects-toolbar";

export default function ProjectsList({ projects, users }: { projects: Project[]; users: User[] }) {
	return (
		<div>
			<ProjectsToolbar />
		</div>
	);
}
