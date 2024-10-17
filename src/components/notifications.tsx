"use client";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TbBellFilled } from "react-icons/tb";

export default function Notifications() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" className="relative" variant="ghost">
					<div className="relative z-20">
						<TbBellFilled className="text-muted-foreground" />
					</div>
					<span className="absolute z-10 top-3 right-2.5 flex h-1.5 w-1.5">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<div className="p-6 grid place-content-center">
					<p>No notifications</p>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
