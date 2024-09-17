"use client";
import Link from "next/link";
import Icon from "@/lib/icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function BottomNavigation() {
	const pathname = usePathname();
	return (
		<div className="fixed sm:hidden bottom-0 left-0 z-40 w-full py-2 px-3 border-t bg-background">
			<div className="flex justify-between items-center">
				<Link
					href="/dashboard"
					className={cn(
						pathname.startsWith("/dashboard")
							? "bg-accent text-accent-foreground"
							: "text-muted-foreground",
						"flex flex-1 py-2 px-3 gap-3 items-center justify-center rounded-md transition-colors md:h-8 md:w-8"
					)}
				>
					<Icon name="dashboard" selected={pathname.startsWith("/dashboard")} />
					<motion.span
						initial={{ width: 0 }}
						animate={
							pathname.startsWith("/dashboard") ? { width: "auto" } : { width: 0 }
						}
						className="line-clamp-3 text-xs leading-6"
					>
						Dashboard
					</motion.span>
				</Link>

				<Link
					href="/calendar"
					className={cn(
						pathname.startsWith("/calendar")
							? "bg-accent text-accent-foreground"
							: "text-muted-foreground",
						"flex flex-1 py-2 px-3 gap-3 items-center justify-center rounded-md transition-colors md:h-8 md:w-8"
					)}
				>
					<Icon name="calendar" selected={pathname.startsWith("/calendar")} />
					<motion.span
						initial={{ width: 0 }}
						animate={
							pathname.startsWith("/calendar") ? { width: "auto" } : { width: 0 }
						}
						className="line-clamp-3 text-xs leading-6"
					>
						Calendar
					</motion.span>
				</Link>

				<Link
					href="#"
					className="flex flex-1 py-2 px-3 gap-3 items-center justify-center rounded-md text-muted-foreground transition-colors md:h-8 md:w-8"
				>
					<Icon name="chart" />
					{/* <span className="line-clamp-3 text-xs leading-6">Chart</span> */}
				</Link>

				<Link
					href="#"
					className="flex flex-1 py-2 px-3 gap-3 items-center justify-center rounded-md text-muted-foreground transition-colors md:h-8 md:w-8"
				>
					<Icon name="data" />
					{/* <span className="line-clamp-3 text-xs leading-6">Tasks</span> */}
				</Link>

				<Link
					href="#"
					className="flex flex-1 py-2 px-3 gap-3 items-center justify-center rounded-md text-muted-foreground transition-colors md:h-8 md:w-8"
				>
					<Icon name="settings" />
					{/* <span className="line-clamp-3 text-xs leading-6">Settings</span> */}
				</Link>
			</div>
		</div>
	);
}
