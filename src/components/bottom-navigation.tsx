"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CalendarDays, LayoutDashboard, SquareChartGantt } from "lucide-react";

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
					<LayoutDashboard />
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
					href="/projects"
					className={cn(
						pathname.startsWith("/projects")
							? "bg-accent text-accent-foreground"
							: "text-muted-foreground",
						"flex flex-1 py-2 px-3 gap-3 items-center justify-center rounded-md transition-colors md:h-8 md:w-8"
					)}
				>
					<SquareChartGantt />
					<motion.span
						initial={{ width: 0 }}
						animate={
							pathname.startsWith("/projects") ? { width: "auto" } : { width: 0 }
						}
						className="line-clamp-3 text-xs leading-6"
					>
						Projects
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
					<CalendarDays className="h-3 w-3" />
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
			</div>
		</div>
	);
}
