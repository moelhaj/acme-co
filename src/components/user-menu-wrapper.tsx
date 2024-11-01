import { getSession } from "@/lib/auth";
import { Suspense } from "react";
import UserMenu from "./user-menu";
import { User } from "@/lib/types";

export default async function UserMenuWrapper() {
	const session = (await getSession()) as { user: User } | null;
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div>{session && <UserMenu user={session.user} />}</div>
		</Suspense>
	);
}
