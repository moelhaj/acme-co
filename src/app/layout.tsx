import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNavigation from "@/components/bottom-navigation";
import Header from "@/components/header";
import SideBar from "@/components/side-bar";

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
				className={cn("antialiased text-sm leading-6", GeistSans.className)}
				suppressHydrationWarning
			>
				<Providers>
					<TooltipProvider delayDuration={0}>
						<div className="flex min-h-screen w-full flex-col">
							<SideBar />
							<div className="flex flex-col sm:pl-14 h-full mb-20">
								<Header />
								{children}
							</div>
						</div>
						<BottomNavigation />
					</TooltipProvider>
				</Providers>
			</body>
		</html>
	);
}
