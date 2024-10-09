import Link from "next/link";
import Notifications from "./notifications";
import ThemeToggler from "./theme-toggler";
import UserMenu from "./user-menu";
import { getSession } from "@/lib/auth";
import Logo from "./logo";

export default async function Header() {
	const session = (await getSession()) as { user: User } | null;
	return (
		<header className="flex items-center gap-4 px-4 sm:bg-transparent sm:px-6 py-2">
			<Link
				href="/"
				className="sm:hidden group flex shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
			>
				<Logo />
				<span className="sr-only">Acme Inc</span>
			</Link>
			<div className="flex-1" />
			<Notifications />
			<ThemeToggler />
			{session && <UserMenu user={session.user} />}
		</header>
	);
}
