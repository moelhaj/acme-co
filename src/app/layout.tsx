import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/theme";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import SideBar from "@/components/side-bar";
import BottomNavigation from "@/components/bottom-navigation";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

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
export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn("antialiased text-sm line-clamp-3 leading-6", inter.className)}
				suppressHydrationWarning
			>
				<Providers>
					<TooltipProvider delayDuration={0}>
						<div className="flex min-h-screen w-full flex-col">
							<SideBar />
							<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
								<Header />
								<main className="overflow-hidden h-[89vh]">
									<div className="h-full overflow-x-scroll overflow-y-scroll pb-10">
										{children}
									</div>
								</main>
							</div>
						</div>
						<BottomNavigation />
					</TooltipProvider>
				</Providers>
			</body>
		</html>
	);
}
