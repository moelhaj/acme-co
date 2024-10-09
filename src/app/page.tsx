import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
	const session = await getSession();
	!session ? redirect("/sign-in") : redirect("/dashboard");
	return (
		<div className="fixed inset-0 z-50 w-screen h-screen grid place-content-center">
			Loading ...
		</div>
	);
}
