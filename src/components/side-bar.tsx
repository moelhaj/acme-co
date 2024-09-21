"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import Icon, { Logo } from "@/lib/icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SideBar() {
	const pathname = usePathname();
	return (
		<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
			<nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
				<Link
					href="#"
					className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
				>
					<Logo />
					<span className="sr-only">Acme Inc</span>
				</Link>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/dashboard"
							className={cn(
								pathname.startsWith("/dashboard")
									? "bg-accent text-accent-foreground"
									: "text-muted-foreground",
								"flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground  transition-colors md:h-8 md:w-8 hover:bg-accent hover:text-accent-foreground"
							)}
						>
							<Icon name="dashboard" selected={pathname.startsWith("/dashboard")} />
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
								pathname.startsWith("/projects")
									? "bg-accent text-accent-foreground"
									: "text-muted-foreground",
								"flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground  transition-colors md:h-8 md:w-8 hover:bg-accent hover:text-accent-foreground"
							)}
						>
							<Icon name="projects" selected={pathname.startsWith("/projects")} />
							<span className="sr-only">Projects</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Projects</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="/calendar"
							className={cn(
								pathname.startsWith("/calendar")
									? "bg-accent text-accent-foreground"
									: "text-muted-foreground",
								"flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground  transition-colors md:h-8 md:w-8 hover:bg-accent hover:text-accent-foreground"
							)}
						>
							<Icon name="calendar" selected={pathname.startsWith("/calendar")} />
							<span className="sr-only">Calendar</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Calendar</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="#"
							className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors md:h-8 md:w-8"
						>
							<Icon name="tasks" />
							<span className="sr-only">Tasks</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Tasks</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="#"
							className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors md:h-8 md:w-8"
						>
							<Icon name="data" />
							<span className="sr-only">Customers</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Customers</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="#"
							className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors md:h-8 md:w-8"
						>
							<Image src="/list.svg" width={20} height={20} alt="dashboard" />
							<span className="sr-only">Analytics</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Analytics</TooltipContent>
				</Tooltip>
			</nav>
			<nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href="#"
							className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors md:h-8 md:w-8"
						>
							<Icon name="settings" />
							<span className="sr-only">Settings</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">Settings</TooltipContent>
				</Tooltip>
			</nav>
		</aside>
	);
}
