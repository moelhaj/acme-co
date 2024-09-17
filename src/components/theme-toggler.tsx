"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Icon from "@/lib/icons";

export default function ThemeToggler() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted)
		return (
			<Image
				src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
				width={36}
				height={36}
				sizes="36x36"
				alt="Loading Light/Dark Toggle"
				priority={false}
				title="Loading Light/Dark Toggle"
			/>
		);

	if (resolvedTheme === "dark") {
		return (
			<Button variant="ghost" onClick={() => setTheme("light")}>
				{/* <Image src="/sun.svg" width={20} height={20} alt="dashboard" /> */}
				<Icon name="sun" />
			</Button>
		);
	}

	if (resolvedTheme === "light") {
		return (
			<Button variant="ghost" onClick={() => setTheme("dark")}>
				{/* <Image src="/night.svg" width={20} height={20} alt="dashboard" /> */}
				<Icon name="star" />
			</Button>
		);
	}
}
