"use client";
import { createProject } from "@/actions/projects";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
	users: User[];
	addOptimisticProject: (project: Project) => void;
};

export default function NewProject({ users, addOptimisticProject }: Props) {
	const [open, setOpen] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
	const [members, setMembers] = useState<string[]>([]);
	const formRef = useRef<HTMLFormElement>(null);

	async function create(data: FormData) {
		const title = data.get("title");
		const details = data.get("details");

		if (
			!title ||
			!details ||
			typeof title !== "string" ||
			typeof details !== "string" ||
			!members.length
		) {
			return setError("All fields are required");
		}

		const newProject: Project = {
			id: crypto.randomUUID(), // Generate a unique ID for the new project
			title,
			details,
			members: [],
			status: "planning",
		};

		addOptimisticProject(newProject);
		await createProject({
			title,
			details,
			members,
			status: "planning",
		});
		formRef.current?.reset();
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Button size="sm" variant="outline" className="flex gap-2">
					<Plus className="w-4 h-4" />
					<span className="hidden md:flex">New Project</span>
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<div className="flex items-center justify-between">
						<AlertDialogTitle>Create new project</AlertDialogTitle>
						<Button onClick={() => setOpen(false)} variant="outline" size="icon">
							<X className="h-4 w-4" />
						</Button>
					</div>
					{error && <div className="h-5 text-rose-500">error message</div>}
				</AlertDialogHeader>
				<form className="space-y-2 w-full" ref={formRef} action={create}>
					<div className="space-y-1">
						<Label htmlFor="title">Title</Label>
						<Input id="title" name="title" autoFocus />
					</div>
					<div className="space-y-1">
						<Label htmlFor="details">Description</Label>
						<Textarea className="resize-none" id="details" name="details" rows={2} />
					</div>
					<ScrollArea className="h-60 w-full pr-3">
						<div className="space-y-1">
							<Label>Project Members</Label>
							<Input
								type="search"
								placeholder="Search members..."
								onChange={e => {
									const query = e.target.value.toLowerCase();
									setFilteredUsers(
										users.filter(user =>
											user.name.toLowerCase().includes(query)
										)
									);
								}}
							/>
						</div>
						<div className="grid grid-cols-2 gap-1 mt-3">
							{filteredUsers.map(user => (
								<div
									key={user.id}
									onClick={() => {
										if (members.includes(user.id)) {
											setMembers(prev => prev.filter(id => id !== user.id));
										} else {
											setMembers(prev => [...prev, user.id]);
										}
									}}
									className={cn(
										"cursor-pointer hover:bg-accent duration-300 flex gap-1 p-2 border rounded-lg",
										members.includes(user.id) && "bg-accent"
									)}
								>
									<div className="bg-accent h-8 w-8 rounded-full grid place-content-center">
										<Image
											src={`/${user?.avatar}`}
											alt={user.name}
											width={25}
											height={25}
											className="h-7 w-7 rounded-full object-contain"
										/>
									</div>
									<div className="flex flex-col">
										<p className="text-xs font-semibold">{user.name}</p>
										<p className="text-xs text-muted-foreground leading-3">
											{user.title}
										</p>
									</div>
								</div>
								// <div key={user.id} className="flex items-center gap-2">
								// 	<input
								// 		type="checkbox"
								// 		id={user.id}
								// 		name="members"
								// 		value={user.id}
								// 		onChange={e => {
								// 			if (e.target.checked) {
								// 				setMembers(prev => [...prev, user.id]);
								// 			} else {
								// 				setMembers(prev =>
								// 					prev.filter(id => id !== user.id)
								// 				);
								// 			}
								// 		}}
								// 	/>
								// 	<label htmlFor={user.id}>{user.name}</label>
								// </div>
							))}
						</div>
					</ScrollArea>

					<div className="flex items-center justify-between">
						<Button
							size="sm"
							type="button"
							variant="outline"
							onClick={() => setOpen(false)}
						>
							Cancel
						</Button>
						<Button size="sm" type="submit">
							Create
						</Button>
					</div>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	);
}
