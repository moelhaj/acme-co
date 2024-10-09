"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileDown } from "lucide-react";
import { useOptimistic } from "react";
import NewProject from "./new-project";

export default function ProjectsHeader({
	projects,
	users,
}: {
	projects: Project[];
	users: User[];
}) {
	const [optimisticProjects, addOptimisticProject] = useOptimistic(
		projects,
		(state, newProject: Project) => {
			return [newProject, ...state];
		}
	);
	console.log(optimisticProjects);
	return (
		<div className="flex items-center justify-between">
			<div>
				{projects.length > 0 && (
					<Input
						type="search"
						placeholder="Search..."
						className="w-full rounded-lg bg-background md:w-[250px] lg:w-[320px]"
					/>
				)}
			</div>
			<div className="flex items-center gap-2">
				<Button size="sm" variant="outline" className="flex gap-2">
					<FileDown className="h-4 w-4" />
					<span className="hidden md:flex">Export</span>
				</Button>
				<NewProject addOptimisticProject={addOptimisticProject} users={users} />
			</div>
		</div>
	);
}
