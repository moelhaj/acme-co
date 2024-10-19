"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
	TbArchiveFilled,
	TbLayoutDashboardFilled,
	TbLayoutKanbanFilled,
	TbSettingsFilled,
} from "react-icons/tb";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

const links = [
	{
		title: "Dashboard",
		url: "/dashboard",
		icon: <TbLayoutDashboardFilled className="w-4 h-4" />,
	},
	{
		title: "Projects",
		url: "/projects",
		icon: <TbArchiveFilled className="w-4 h-4" />,
	},
	{
		title: "Tasks",
		url: "/tasks",
		icon: <TbLayoutKanbanFilled className="w-4 h-4" />,
	},
	{
		title: "Settings",
		url: "/settings",
		icon: <TbSettingsFilled className="w-4 h-4" />,
	},
];

export default function Nav() {
	const pathname = usePathname();
	return (
		<>
			{links.map(link => (
				<SidebarMenuItem key={link.title}>
					<SidebarMenuButton asChild>
						<a href={link.url}>
							<div
								className={cn(
									pathname === link.url ? "text-primary" : "text-gray-500"
								)}
							>
								{link.icon}
							</div>
							<span>{link.title}</span>
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
			))}
		</>
	);
}
