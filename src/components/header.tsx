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
		<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
			<Link
				href="#"
				className="sm:hidden group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
			>
				<Logo />
				<span className="sr-only">Acme Inc</span>
			</Link>
			{/* <Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" className="sm:hidden">
						<Image src="/menu.svg" width={20} height={20} alt="menu" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="sm:max-w-xs">
					<nav className="grid gap-6 text-lg font-medium">
						<Link
							href="#"
							className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
						>
							<Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
							<span className="sr-only">Acme Inc</span>
						</Link>
						<Link
							href="#"
							className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<Home className="h-5 w-5" />
							Dashboard
						</Link>
						<Link href="#" className="flex items-center gap-4 px-2.5 text-foreground">
							<ShoppingCart className="h-5 w-5" />
							Orders
						</Link>
						<Link
							href="#"
							className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<Package className="h-5 w-5" />
							Products
						</Link>
						<Link
							href="#"
							className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<Users2 className="h-5 w-5" />
							Customers
						</Link>
						<Link
							href="#"
							className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<LineChart className="h-5 w-5" />
							Settings
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
			<Breadcrumb className="hidden md:flex">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="#">Dashboard</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="#">Orders</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Recent Orders</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb> */}
			<div className="relative sm:ml-0 ml-auto flex-1 md:grow-0">
				<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input
					type="search"
					placeholder="Search..."
					className="w-full rounded-lg bg-background pl-8 md:w-[250px] lg:w-[320px]"
				/>
			</div>
			<div className="sm:flex-1" />
			<Notifications />
			<ThemeToggler />
			<UserMenu />
		</header>
	);
}
