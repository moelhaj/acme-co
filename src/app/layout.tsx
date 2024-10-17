import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Providers } from "@/lib/theme";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNavigation from "@/components/bottom-navigation";
import SideBar from "@/components/side-bar";
import Header from "@/components/header";

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
			<body
				className={cn("antialiased text-sm overflow-hidden", GeistSans.className)}
				suppressHydrationWarning
			>
				<Providers>
					<TooltipProvider delayDuration={0}>
						<div className="flex sm:gap-4 sm:p-4 overflow-hidden h-screen">
							<SideBar />
							<div className="bg-background rounded-lg pb-4 overflow-hidden flex flex-col w-full">
								<Header />
								<div className="flex-1 pt-4 pb-4 pl-4 pr-2 overflow-y-scroll w-full">
									{children}
								</div>
							</div>
						</div>
						<BottomNavigation />
					</TooltipProvider>
				</Providers>
			</body>
		</html>
	);
}
