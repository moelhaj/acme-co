import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	Home,
	LineChart,
	Package,
	Package2,
	PanelLeft,
	Search,
	ShoppingCart,
	Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import UserMenu from "./user-menu";
import Icon, { Logo } from "@/lib/icons";
import Notifications from "./notifications";

export default function Header() {
	return (
		<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:bg-transparent sm:px-6">
			<Link
				href="#"
				className="sm:hidden group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
			>
				<Logo />
				<span className="sr-only">Acme Inc</span>
			</Link>
			<div className="flex-1" />
			<Notifications />
			<ThemeToggler />
			<UserMenu />
		</header>
	);
}
