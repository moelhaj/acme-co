import { SidebarTrigger } from "@/components/ui/sidebar";
import Notifications from "./notifications";
import ThemeToggler from "./theme-toggler";

export default async function Header() {
	return (
		<header className="sticky top-0 bg-background rounded-tl-lg rounded-tr-lg flex items-center gap-4 px-4 py-2 border-b border-muted w-full">
			<SidebarTrigger />
			<div className="flex-1" />
			<Notifications />
			<ThemeToggler />
		</header>
	);
}
