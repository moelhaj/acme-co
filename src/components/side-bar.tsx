"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	TbArchiveFilled,
	TbLayoutDashboardFilled,
	TbLayoutKanbanFilled,
	TbSettingsFilled,
} from "react-icons/tb";
import Logo from "./logo";

const links = [
	{
		id: 1,
		href: "/dashboard",
		label: "Dashboard",
		icon: <TbLayoutDashboardFilled className="w-4 h-4" />,
	},
	{
		id: 2,
		href: "/projects",
		label: "Projects",
		icon: <TbArchiveFilled className="w-4 h-4" />,
	},
	{
		id: 3,
		href: "/tasks",
		label: "Tasks",
		icon: <TbLayoutKanbanFilled className="w-4 h-4" />,
	},
];

export default function SideBar() {
	const pathname = usePathname();

	return (
		<div className="hidden sm:flex bg-background rounded-lg h-full duration-300 pb-2 min-w-[60px]">
			<div className="flex flex-col w-full">
				<Link
					href="/"
					className="rounded-tl-lg rounded-tr-lg flex p-4 items-center justify-center"
				>
					<Logo />
				</Link>

				{/* <div className="h-12" /> */}

				<nav className="flex flex-col px-2 gap-3 items-center justify-center">
					{links.map(link => (
						<SideBarItem
							key={link.id}
							href={link.href}
							icon={link.icon}
							label={link.label}
							pathname={pathname}
						/>
					))}
				</nav>

				<div className="flex-1" />

				<div className="flex flex-col px-2 gap-3 items-center justify-center">
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href="/settings"
								className={cn(
									"group rounded-lg flex p-2 items-center justify-center",
									pathname.startsWith("/settings") ? "bg-accent" : ""
								)}
							>
								<TbSettingsFilled
									className={cn(
										"w-4 h-4",
										pathname.startsWith("/settings")
											? ""
											: "text-muted-foreground"
									)}
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent side="right">Settings</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}

type SideBarItemProps = {
	href: string;
	icon: React.ReactNode;
	label: string;
	pathname: string;
};

function SideBarItem({ href, icon, label, pathname }: SideBarItemProps) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link
					href={href}
					className={cn(
						"group rounded-lg flex p-2 items-center justify-center",
						pathname.startsWith(href) ? "bg-accent" : ""
					)}
				>
					<div className={cn(pathname.startsWith(href) ? "" : "text-muted-foreground")}>
						{icon}
					</div>
				</Link>
			</TooltipTrigger>
			<TooltipContent side="right">{label}</TooltipContent>
		</Tooltip>
	);
}
