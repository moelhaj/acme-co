"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
	CalendarDays,
	FileCog,
	Layers,
	LayoutGrid,
	SlidersHorizontal,
	SquareChartGantt,
	SquareKanban,
	Table2,
} from "lucide-react";

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
					<Table2 className="w-4 h-4" />
					<span className="text-[0.65rem]">Dashboard</span>
				</Link>

				<Link
					href="/projects"
					className={cn(
						pathname.startsWith("/projects") ? "text-primary" : "",
						"flex flex-col gap-1 p-2 flex-1 items-center justify-center"
					)}
				>
					<FileCog className="w-4 h-4" />
					<span className="text-[0.65rem]">Projects</span>
				</Link>

				<Link
					href="/tasks"
					className={cn(
						pathname.startsWith("/tasks") ? "text-primary" : "",
						"flex flex-col gap-1 p-2 flex-1 items-center justify-center"
					)}
				>
					<SquareKanban className="w-4 h-4" />
					<span className="text-[0.65rem]">Tasks</span>
				</Link>

				<Link
					href="/calendar"
					className={cn(
						pathname.startsWith("/calendar") ? "text-primary" : "",
						"flex flex-col gap-1 p-2 flex-1 items-center justify-center"
					)}
				>
					<CalendarDays className="w-4 h-4" />
					<span className="text-[0.65rem]">Calendar</span>
				</Link>

				<Link
					href="/settings"
					className={cn(
						pathname.startsWith("/settings") ? "text-primary" : "",
						"flex flex-col gap-1 p-2 flex-1 items-center justify-center"
					)}
				>
					<SlidersHorizontal className="w-4 h-4" />
					<span className="text-[0.65rem]">Settings</span>
				</Link>
			</div>
		</div>
	);
}
