import React from "react";

export default function ProjectsList({ projects }: { projects: Project[] }) {
	return (
		<div>
			{projects.length === 0 && (
				<div className="p-4 flex flex-col items-center justify-center h-[80vh] gap-2">
					<div className="border border-dashed rounded-xl text-center p-6">
						<h3 className="text-lg font-semibold">No projects found.</h3>
						<p className="text-muted-foreground">Start by adding a project</p>
					</div>
				</div>
			)}
		</div>
	);
}
