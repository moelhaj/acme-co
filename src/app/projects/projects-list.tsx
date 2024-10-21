"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import NewProject from "./new-project";
import SearchProject from "./search-project";

export default function ProjectsList({
	projects,
	users,
	count,
}: {
	projects: Project[];
	users: User[];
	count: number | null;
}) {
	console.log(count);
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<div>
					<SearchProject />
				</div>
				<div>
					<NewProject users={users} />
				</div>
			</div>
			<div className="rounded-lg border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Title</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Members</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{projects.map(project => (
							<TableRow key={project.id}>
								<TableCell>{project.title}</TableCell>
								<TableCell>{project.status}</TableCell>
								<TableCell>
									<div className="flex -space-x-1">
										{project.members.split(", ").map(id => {
											const user = users.find(user => user.id === id);
											return (
												<Image
													key={user?.id}
													src={`/${user?.avatar}`}
													alt={user?.name || "user avatar"}
													width={25}
													height={25}
													className="inline-block h-6 w-6 rounded-full ring-2 ring-accent bg-accent"
												/>
											);
										})}
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
