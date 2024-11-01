"use client";
// import { createProject } from "@/actions/projects";
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
import { useState } from "react";
import { TbCheck } from "react-icons/tb";
import { User } from "@/lib/types";

type NewProject = {
	title: string;
	details: string;
	users: string[];
};

export default function NewProject({ users }: { users: User[] }) {
	const [open, setOpen] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
	const [members, setMembers] = useState<string[]>([]);
	const [currentSlide, setCurrentSlide] = useState(0);

	const [project, setProject] = useState<NewProject>({
		title: "",
		details: "",
		users: [],
	});
	const handleChange = (e: { target: { id: string; value: string } }) => {
		setProject({ ...project, [e.target.id]: e.target.value });
	};

	const handleNext = () => {
		if (currentSlide === 0) {
			setCurrentSlide(1);
			setError("");
		}
	};

	const handleBack = () => {
		if (currentSlide === 1) {
			setCurrentSlide(0);
		}
	};

	// async function create(data: FormData) {
	// 	const title = data.get("title");
	// 	const details = data.get("details");

	// 	if (
	// 		!title ||
	// 		!details ||
	// 		typeof title !== "string" ||
	// 		typeof details !== "string" ||
	// 		members.length === 0
	// 	) {
	// 		return setError("All fields are required, and you must add at least one member.");
	// 	}
	// 	await createProject({
	// 		title,
	// 		details,
	// 		members: members.join(", "),
	// 		status: "on track",
	// 	});
	// 	setMembers([]);
	// 	formRef.current?.reset();
	// 	setOpen(false);
	// }

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Button size="sm" variant="outline" className="flex gap-2">
					<Plus className="w-4 h-4" />
					<span className="hidden md:flex">New Project</span>
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="max-w-xl">
				<AlertDialogHeader>
					<div className="flex items-center justify-between">
						<AlertDialogTitle>Create new project</AlertDialogTitle>
						<Button onClick={() => setOpen(false)} variant="outline" size="icon">
							<X className="h-4 w-4" />
						</Button>
					</div>
					{error && <div className="h-5 text-rose-500">{error}</div>}
				</AlertDialogHeader>
				<div className="w-full h-full overflow-hidden relative">
					{/* Slider wrapper */}
					<div
						className={`flex transition-transform duration-500 ease-in-out`}
						style={{ transform: `translateX(-${currentSlide * 100}%)` }}
					>
						{/* First Slide */}
						<div className="w-full h-full flex items-center justify-center shrink-0 p-1 min-h-56">
							<div className="space-y-2 w-full">
								<div className="space-y-1">
									<Label htmlFor="title">
										Title <span className="text-rose-500">*</span>
									</Label>
									<Input
										id="title"
										value={project.title}
										onChange={handleChange}
										required
										autoFocus
									/>
								</div>
								<div className="space-y-1">
									<Label htmlFor="details">
										Description <span className="text-rose-500">*</span>
									</Label>
									<Textarea
										className="resize-none"
										id="details"
										value={project.details}
										onChange={handleChange}
										required
										rows={5}
									/>
								</div>
							</div>
						</div>

						{/* Second Slide */}
						<div className="w-full h-full flex items-center justify-center shrink-0 p-1 min-h-56">
							<ScrollArea className="h-64 w-full pr-3">
								<div className="space-y-1 p-1">
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
													setMembers(prev =>
														prev.filter(id => id !== user.id)
													);
												} else {
													setMembers(prev => [...prev, user.id]);
												}
											}}
											className="cursor-pointer hover:bg-accent duration-300 flex items-center gap-1 p-2 border rounded-lg"
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
											<div className="flex-1" />
											<div
												className={cn(
													"w-5 h-5 rounded-full grid place-content-center ",
													members.includes(user.id)
														? "bg-primary text-white"
														: "bg-accent text-muted-foreground"
												)}
											>
												<TbCheck />
											</div>
										</div>
									))}
								</div>
							</ScrollArea>
						</div>
					</div>

					<div className="flex items-center justify-between mt-4">
						{currentSlide === 1 && (
							<Button onClick={handleBack} variant="outline" size="sm">
								Back
							</Button>
						)}

						<div className="flex" />
						{currentSlide === 0 && (
							<Button
								disabled={project.title === "" || project.details === ""}
								onClick={handleNext}
								variant="outline"
								size="sm"
							>
								Next
							</Button>
						)}
						{currentSlide === 1 && (
							<Button size="sm" disabled={members.length === 0}>
								Create
							</Button>
						)}
					</div>

					{/* Conditional Next Button */}

					{/* Conditional Back Button */}
				</div>
			</AlertDialogContent>
		</AlertDialog>
	);
}
