import { Metadata } from "next";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import {
	Activity,
	ArrowUpRight,
	CircleUser,
	CreditCard,
	DollarSign,
	Menu,
	Package2,
	Search,
	Users,
} from "lucide-react";
import FirstChart from "./components/bar";
import SecondChart from "./components/pie";
import ThirdChart from "./components/horizontal";

export const metadata: Metadata = {
	title: "Dashboard",
};

const posts = [
	{
		id: 1,
		title: "Boost your conversion rate",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		category: { title: "Marketing", href: "#" },
		author: {
			name: "Michael Foster",
			role: "Co-Founder / CTO",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 2,
		title: "Boost your conversion rate",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		category: { title: "Marketing", href: "#" },
		author: {
			name: "Michael Foster",
			role: "Co-Founder / CTO",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		id: 3,
		title: "Boost your conversion rate",
		href: "#",
		description:
			"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		category: { title: "Marketing", href: "#" },
		author: {
			name: "Michael Foster",
			role: "Co-Founder / CTO",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
];

export default function Dashboard() {
	return (
		<div className="p-4 sm:px-6">
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
				<Card x-chunk="dashboard-01-chunk-0">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">$45,231.89</div>
						<p className="text-xs text-muted-foreground">+20.1% from last month</p>
					</CardContent>
				</Card>
				<Card x-chunk="dashboard-01-chunk-1">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">+2350</div>
						<p className="text-xs text-muted-foreground">+180.1% from last month</p>
					</CardContent>
				</Card>
				<Card x-chunk="dashboard-01-chunk-2">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Sales</CardTitle>
						<CreditCard className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">+12,234</div>
						<p className="text-xs text-muted-foreground">+19% from last month</p>
					</CardContent>
				</Card>
				<Card x-chunk="dashboard-01-chunk-3">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Active Now</CardTitle>
						<Activity className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">+573</div>
						<p className="text-xs text-muted-foreground">+201 since last hour</p>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-7">
				<FirstChart />
				<SecondChart />
				<ThirdChart />
			</div>

			{/* <div className="flex items-center mt-5">
				<h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
			</div>
			<div
				className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
				x-chunk="dashboard-02-chunk-1"
			>
				<div className="flex flex-col items-center gap-1 text-center">
					<h3 className="text-2xl font-bold tracking-tight">You have no products</h3>
					<p className="text-sm text-muted-foreground">
						You can start selling as soon as you add a product.
					</p>
					<Button className="mt-4">Add Product</Button>
				</div>
			</div>
			<div className="mx-auto max-w-2xl lg:mx-0">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From the blog</h2>
				<p className="mt-2 text-lg leading-8">
					Learn how to grow your business with our expert advice.
				</p>
			</div>
			<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{posts.map(post => (
					<article
						key={post.id}
						className="flex max-w-xl flex-col items-start justify-between"
					>
						<div className="flex items-center gap-x-4 text-xs">
							<time dateTime={post.datetime} className="">
								{post.date}
							</time>
							<a
								href={post.category.href}
								className="relative z-10 rounded-full bg-accent px-3 py-1.5 font-medium"
							>
								{post.category.title}
							</a>
						</div>
						<div className="group relative">
							<h3 className="mt-3 text-lg font-semibold leading-6">
								<a href={post.href}>
									<span className="absolute inset-0" />
									{post.title}
								</a>
							</h3>
							<p className="mt-5 line-clamp-3 text-sm leading-6">
								{post.description}
							</p>
						</div>
						<div className="relative mt-8 flex items-center gap-x-4">
							<img
								alt=""
								src={post.author.imageUrl}
								className="h-10 w-10 rounded-full bg-gray-50"
							/>
							<div className="text-sm leading-6">
								<p className="font-semibold">
									<a href={post.author.href}>
										<span className="absolute inset-0" />
										{post.author.name}
									</a>
								</p>
								<p>{post.author.role}</p>
							</div>
						</div>
					</article>
				))}
			</div> */}
		</div>
	);
}
