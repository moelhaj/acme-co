"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	TbArchiveFilled,
	TbLayoutDashboardFilled,
	TbLayoutKanbanFilled,
	TbSettingsFilled,
} from "react-icons/tb";

export default function BottomNavigation() {
	const pathname = usePathname();
	return (
		<div className="fixed sm:hidden bottom-0 left-0 z-40 w-full pt-2 px-3 border-t bg-background">
			<div className="flex justify-between items-center gap-3">
				<Link
					href="/dashboard"
					className={cn(
						pathname.startsWith("/dashboard") ? "text-primary" : "",
						"flex flex-col gap-1 p-2 flex-1 items-center justify-center"
					)}
				>
					<TbLayoutDashboardFilled
						className={cn(
							"text-muted-foreground",
							pathname.startsWith("/dashboard") ? "text-primary" : ""
						)}
					/>
					<span className="text-[0.65rem]">Dashboard</span>
				</Link>

				<Link
					href="/projects"
					className={cn(
						pathname.startsWith("/projects") ? "text-primary" : "",
						"flex flex-col gap-1 p-2 flex-1 items-center justify-center"
					)}
				>
					<TbArchiveFilled
						className={cn(
							"text-muted-foreground",
							pathname.startsWith("/projects") ? "text-primary" : ""
						)}
					/>
					<span className="text-[0.65rem]">Projects</span>
				</Link>

				<Link
					href="/tasks"
					className={cn(
						pathname.startsWith("/tasks") ? "text-primary" : "",
						"flex flex-col gap-1 p-2 flex-1 items-center justify-center"
					)}
				>
					<TbLayoutKanbanFilled
						className={cn(
							"text-muted-foreground",
							pathname.startsWith("/tasks") ? "text-primary" : ""
						)}
					/>
					<span className="text-[0.65rem]">Tasks</span>
				</Link>

				<Link
					href="/settings"
					className={cn(
						pathname.startsWith("/settings") ? "text-primary" : "",
						"flex flex-col gap-1 p-2 flex-1 items-center justify-center"
					)}
				>
					<TbSettingsFilled
						className={cn(
							"text-muted-foreground",
							pathname.startsWith("/settings") ? "text-primary" : ""
						)}
					/>
					<span className="text-[0.65rem]">Settings</span>
				</Link>
			</div>
		</div>
	);
}
