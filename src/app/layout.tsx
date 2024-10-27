import AppSidebar from "@/components/app-sidebar";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "@/lib/theme";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		template: "%s | Acme-co",
		default: "Acme-co",
	},
	description: "Project management for developers",
	metadataBase: new URL("https://acme-co-ivory.vercel.app"),
	keywords: ["Next.js", "React", "Tailwind CSS", "Server Components", "Shadcn"],
	authors: [
		{
			name: "Mohamed Elhaj",
			url: "https://moelhaj.github.io/",
		},
	],
	creator: "Mohamed Elhaj",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://moelhaj.github.io/",
		title: "Codex",
		description: "Project management for developers",
		siteName: "Codex",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased text-sm" suppressHydrationWarning>
				<Providers>
					<TooltipProvider delayDuration={0}>
						<SidebarProvider>
							<AppSidebar />
							<main className="w-full">
								<Header />
								<div className="w-full h-full p-4">{children}</div>
							</main>
						</SidebarProvider>
					</TooltipProvider>
				</Providers>
			</body>
		</html>
	);
}
