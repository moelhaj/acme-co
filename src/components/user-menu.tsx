"use client";
import { signOut } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function UserMenu({ user }: { user: User }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" className="relative" variant="ghost">
					<Image
						src={`/${user?.avatar}`}
						alt={user?.name || "user avatar"}
						width={25}
						height={25}
						className="h-6 w-6 rounded-full object-contain"
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<div className="flex items-center gap-1 px-3 py-1">
					<div className="flex flex-col">
						<p className="text-xs font-semibold">{user?.name}</p>
						<p className="text-xs text-muted-foreground leading-3">{user?.title}</p>
					</div>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
