"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
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
import Logo from "./logo";

export default function SideBar() {
	const pathname = usePathname();
	return (
		<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
			<nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
				<Link
					href="/"
					className="group flex shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
				>
					<Logo />
					<span className="sr-only">Acme Inc</span>
				</Link>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/dashboard"
							className={cn(
								pathname.startsWith("/dashboard") ? "bg-accent" : "",
								"flex h-9 w-9 items-center justify-center rounded-lg   transition-colors md:h-8 md:w-8 hover:bg-accent hover"
							)}
						>
							{/* <LayoutGrid className="w-4 h-4" /> */}
							<Table2 className="w-4 h-4" />
							<span className="sr-only">Dashboard</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Dashboard</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/projects"
							className={cn(
								pathname.startsWith("/projects") ? "bg-accent" : "",
								"flex h-9 w-9 items-center justify-center rounded-lg   transition-colors md:h-8 md:w-8 hover:bg-accent hover"
							)}
						>
							<FileCog className="w-4 h-4" />
							<span className="sr-only">Projects</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Projects</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/tasks"
							className={cn(
								pathname.startsWith("/tasks") ? "bg-accent" : "",
								"flex h-9 w-9 items-center justify-center rounded-lg   transition-colors md:h-8 md:w-8 hover:bg-accent hover"
							)}
						>
							<SquareKanban className="w-4 h-4" />
							<span className="sr-only">Tasks</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Tasks</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/calendar"
							className={cn(
								pathname.startsWith("/calendar") ? "bg-accent" : "",
								"flex h-9 w-9 items-center justify-center rounded-lg   transition-colors md:h-8 md:w-8 hover:bg-accent hover"
							)}
						>
							<CalendarDays className="w-4 h-4" />
							<span className="sr-only">Calendar</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Calendar</TooltipContent>
				</Tooltip>
			</nav>
			<nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="#"
							className="flex h-9 w-9 items-center justify-center rounded-lg  hover:bg-accent hover transition-colors md:h-8 md:w-8"
						>
							<SlidersHorizontal className="w-4 h-4" />
							<span className="sr-only">Settings</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Settings</TooltipContent>
				</Tooltip>
			</nav>
		</aside>
	);
}
