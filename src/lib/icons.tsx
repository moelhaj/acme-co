"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const slate = "#1f2937";
const indigo = "#4f46e5";
const gray = "#aaabac";
const white = "#f1f5f9";
const darkGray = "#64748b";

export const Logo = () => {
	const { resolvedTheme } = useTheme();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
			<path
				d="M17 7v10H7V7h10m3-4H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
				data-name="abstract-9"
				style={{
					fill: resolvedTheme === "dark" ? white : gray,
				}}
			/>
			<path
				style={{
					fill: indigo,
				}}
				d="M20 3h-8v4h5v10h-5v4h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
			/>
		</svg>
	);
};

const Icon = ({ name, selected }: { name: string; selected?: boolean }) => {
	const { resolvedTheme } = useTheme();
	const [baseColor, setBaseColor] = useState(gray);
	const [secondaryColor, setSecondaryColor] = useState(slate);

	useEffect(() => {
		resolvedTheme === "dark" ? setBaseColor(white) : setBaseColor(gray);
		resolvedTheme === "dark" ? setSecondaryColor(darkGray) : setSecondaryColor(slate);
	}, [resolvedTheme]);

	if (name === "user") {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
				<path
					d="M17.83 10.4a.86.86 0 0 0-.57.16V6.89H6.69v3.67a.86.86 0 0 0-.57-.16c-.63.06-1.07.87-1 1.8s.69 1.65 1.32 1.58a.86.86 0 0 0 .23-.06v.59A3.46 3.46 0 0 0 7.91 17l2.46 2a2.62 2.62 0 0 0 3.27.08l2.29-1.69a3.45 3.45 0 0 0 1.33-2.79v-.89a.86.86 0 0 0 .23.06c.63.07 1.22-.64 1.32-1.58s-.35-1.73-.98-1.79Z"
					style={{
						fill: baseColor,
					}}
				/>
				<path
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					d="M9 7.17a5 5 0 0 0-2.21 5s-3.37-7 2.7-7.49a6.16 6.16 0 0 1 5.2-.87 5.43 5.43 0 0 1 2.56 8.37s0-3.05-3.63-2.79A5.44 5.44 0 0 1 9 7.17ZM20.9 22.64h-3a.75.75 0 1 1 0-1.5h3a.46.46 0 0 0 .46-.45v-3.34a.75.75 0 0 1 1.5 0v3.34a2 2 0 0 1-1.96 1.95ZM6.2 22.64h-3a2 2 0 0 1-2-1.95v-3.34a.75.75 0 0 1 1.5 0v3.34a.46.46 0 0 0 .46.45h3a.75.75 0 0 1 0 1.5ZM22.11 7.29a.75.75 0 0 1-.75-.75V3.2a.46.46 0 0 0-.46-.45h-3a.75.75 0 0 1 0-1.5h3a2 2 0 0 1 2 2v3.29a.76.76 0 0 1-.79.75ZM2 7.29a.76.76 0 0 1-.75-.75V3.2a2 2 0 0 1 2-1.95h3a.75.75 0 0 1 0 1.5h-3a.46.46 0 0 0-.46.45v3.34a.76.76 0 0 1-.79.75Z"
				/>
			</svg>
		);
	}

	if (name === "sun") {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
				<path
					d="M13 22h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1Zm5.2-11.27 2.59-1.5a1 1 0 0 0 .37-1.36l-1-1.74a1 1 0 0 0-1.37-.36l-2.59 1.5a1 1 0 0 0-.37 1.36l1 1.74a1 1 0 0 0 1.37.36ZM7.8 7.27l-2.59-1.5a1 1 0 0 0-1.37.36l-1 1.74a1 1 0 0 0 .37 1.36l2.59 1.5a1 1 0 0 0 1.37-.36l1-1.74a1 1 0 0 0-.37-1.36Z"
					style={{
						fill: baseColor,
					}}
				/>
				<path
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					d="M13 7h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1ZM5.21 18.23l2.59-1.5a1 1 0 0 0 .37-1.36l-1-1.74a1 1 0 0 0-1.37-.36l-2.59 1.5a1 1 0 0 0-.37 1.36l1 1.74a1 1 0 0 0 1.37.36Zm15.58-3.46-2.59-1.5a1 1 0 0 0-1.37.36l-1 1.74a1 1 0 0 0 .37 1.36l2.59 1.5a1 1 0 0 0 1.37-.36l1-1.74a1 1 0 0 0-.37-1.36Z"
				/>
			</svg>
		);
	}

	if (name === "bell") {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
				<circle
					cx={12}
					cy={19}
					r={3}
					style={{
						fill: baseColor,
					}}
				/>
				<path
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					d="M19 15v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3a2 2 0 0 0 2-2v-3a5 5 0 0 1 4-4.9V3a1 1 0 0 1 2 0v2.1a5 5 0 0 1 4 4.9v3a2 2 0 0 0 2 2Zm-8-5a1 1 0 0 1 1-1 1 1 0 0 0 0-2 3 3 0 0 0-3 3 1 1 0 0 0 2 0Z"
				/>
			</svg>
		);
	}

	if (name === "settings") {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
				<path
					d="M22 8.66a6.79 6.79 0 0 1-7.76 6.86 3 3 0 0 0-2.54.89l-4.76 4.75a2.91 2.91 0 0 1-4.23-.11 3 3 0 0 1 .22-4.13l4.65-4.64a3 3 0 0 0 .88-2.54A6.79 6.79 0 0 1 15.32 2a1.07 1.07 0 0 1 .73 1.82l-2.87 2.86a1.54 1.54 0 0 0-.32 1.77 5.56 5.56 0 0 0 2.67 2.68 1.56 1.56 0 0 0 1.77-.32l2.88-2.88a1.07 1.07 0 0 1 1.82.73Z"
					style={{
						fill: baseColor,
					}}
				/>
				<path
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					d="M4.17 19.81a1 1 0 0 1 0-1.37l5.53-5.53a1 1 0 0 1 1.37 0 1 1 0 0 1 0 1.38l-5.52 5.52a1 1 0 0 1-1.38 0Z"
				/>
			</svg>
		);
	}

	if (name === "data") {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
				<rect
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					width={7}
					height={6}
					x={2}
					y={2}
					rx={2.08}
				/>
				<rect
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					width={6}
					height={4}
					x={16}
					y={3}
					rx={1.29}
				/>
				<rect
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					width={6}
					height={4}
					x={16}
					y={10.5}
					rx={1.29}
				/>
				<rect
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					width={6}
					height={4}
					x={16}
					y={18}
					rx={1.29}
				/>
				<path
					d="M16 13.25a.75.75 0 0 0 0-1.5h-2.75v-6H16a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h2.75v12.07a2.93 2.93 0 0 0 2.93 2.93H16a.75.75 0 0 0 0-1.5h-1.32a1.43 1.43 0 0 1-1.43-1.43v-4.57Z"
					style={{
						fill: baseColor,
					}}
				/>
			</svg>
		);
	}

	if (name === "chart") {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
				<rect
					width={20.06}
					height={20}
					x={2.03}
					y={2}
					rx={5.96}
					style={{
						fill: baseColor,
					}}
				/>
				<path
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					d="M16.24 14.63a.75.75 0 0 1-.55-.24l-2.63-2.88a.11.11 0 0 0-.14 0l-1.54 1.26a1.59 1.59 0 0 1-2.17-.14l-2.4-2.5a.75.75 0 0 1 1.09-1l2.4 2.5a.09.09 0 0 0 .13 0L12 10.34a1.6 1.6 0 0 1 2.19.16l2.62 2.87a.75.75 0 0 1 0 1.06.78.78 0 0 1-.57.2Z"
				/>
				<path
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					d="M17.23 15.71h-2.91a.75.75 0 0 1 0-1.5h2.16V12A.75.75 0 0 1 18 12v3a.74.74 0 0 1-.77.71Z"
				/>
			</svg>
		);
	}

	if (name === "calendar") {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
				<rect
					width={20}
					height={18}
					x={2}
					y={4}
					rx={1}
					style={{
						fill: baseColor,
					}}
				/>
				<path
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
					d="M6 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Zm5-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0Zm4 0V3a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0Zm4 0V3a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0ZM8.84 13.09a1.43 1.43 0 0 0 .93-.31 1.13 1.13 0 0 0 .38-.91 1.09 1.09 0 0 0-.31-.78 1.1 1.1 0 0 0-.84-.32 1.42 1.42 0 0 0-.59.1.85.85 0 0 0-.37.26 2 2 0 0 0-.25.42c-.08.18-.16.34-.22.49a.39.39 0 0 1-.21.19.83.83 0 0 1-.36.07.6.6 0 0 1-.43-.19.65.65 0 0 1-.19-.5 1.39 1.39 0 0 1 .19-.61 2.39 2.39 0 0 1 .54-.64A3 3 0 0 1 8 9.83a3.65 3.65 0 0 1 1.18-.18 3.39 3.39 0 0 1 1 .15 2.65 2.65 0 0 1 .81.45 1.88 1.88 0 0 1 .52.68 2 2 0 0 1 .18.83 1.9 1.9 0 0 1-.26 1 3.39 3.39 0 0 1-.73.82 3.12 3.12 0 0 1 .78.56 2.33 2.33 0 0 1 .47.7 2.27 2.27 0 0 1 .16.83 2.65 2.65 0 0 1-.22 1 2.59 2.59 0 0 1-.63.89 3 3 0 0 1-1 .61 3.62 3.62 0 0 1-1.26.26 3 3 0 0 1-1.26-.26 2.68 2.68 0 0 1-.92-.63 2.74 2.74 0 0 1-.54-.78 1.72 1.72 0 0 1-.18-.67.73.73 0 0 1 .21-.54.77.77 0 0 1 .55-.21.55.55 0 0 1 .32.1.44.44 0 0 1 .2.23 4 4 0 0 0 .65 1.21 1.24 1.24 0 0 0 1 .39 1.49 1.49 0 0 0 1.26-.71 1.45 1.45 0 0 0 .22-.81 1.5 1.5 0 0 0-.38-1.08 1.36 1.36 0 0 0-1-.39H8.45a.72.72 0 0 1-.5-.16.61.61 0 0 1-.17-.45.54.54 0 0 1 .22-.4 1 1 0 0 1 .63-.18Zm6.51 4.39v-5.33a4.82 4.82 0 0 1-2 1.14.58.58 0 0 1-.43-.2.61.61 0 0 1-.19-.45.52.52 0 0 1 .18-.44 3.93 3.93 0 0 1 .67-.37 4.68 4.68 0 0 0 1.13-.7 4.87 4.87 0 0 0 .75-.82 6.26 6.26 0 0 1 .43-.57.51.51 0 0 1 .37-.1.59.59 0 0 1 .5.24 1 1 0 0 1 .19.66v6.71c0 .78-.27 1.18-.8 1.18a.75.75 0 0 1-.58-.24 1.06 1.06 0 0 1-.22-.71Z"
				/>
			</svg>
		);
	}

	if (name === "dashboard") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				id="General"
				viewBox="0 0 24 24"
				className="w-5 h-5"
			>
				<defs>
					<style>{".cls-1{opacity:.3}"}</style>
				</defs>
				<g id="gen001-010">
					<g id="gen008">
						<rect
							width={9}
							height={9}
							x={2}
							y={2}
							rx={1}
							style={{
								fill: selected ? indigo : secondaryColor,
							}}
						/>
						<rect
							width={9}
							height={9}
							x={13}
							y={2}
							style={{
								fill: baseColor,
							}}
							rx={1}
						/>
						<rect
							width={9}
							height={9}
							x={2}
							y={13}
							style={{
								fill: baseColor,
							}}
							rx={1}
						/>
						<rect
							width={9}
							height={9}
							x={13}
							y={13}
							style={{
								fill: baseColor,
							}}
							rx={1}
						/>
					</g>
				</g>
			</svg>
		);
	}

	if (name === "sun") {
		return (
			<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<g id="abstract">
					<g id="abstract-12">
						<path d="M13 22h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1Zm5.2-11.27 2.59-1.5a1 1 0 0 0 .37-1.36l-1-1.74a1 1 0 0 0-1.37-.36l-2.59 1.5a1 1 0 0 0-.37 1.36l1 1.74a1 1 0 0 0 1.37.36ZM7.8 7.27l-2.59-1.5a1 1 0 0 0-1.37.36l-1 1.74a1 1 0 0 0 .37 1.36l2.59 1.5a1 1 0 0 0 1.37-.36l1-1.74a1 1 0 0 0-.37-1.36ZM13 7h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1ZM5.21 18.23l2.59-1.5a1 1 0 0 0 .37-1.36l-1-1.74a1 1 0 0 0-1.37-.36l-2.59 1.5a1 1 0 0 0-.37 1.36l1 1.74a1 1 0 0 0 1.37.36Zm15.58-3.46-2.59-1.5a1 1 0 0 0-1.37.36l-1 1.74a1 1 0 0 0 .37 1.36l2.59 1.5a1 1 0 0 0 1.37-.36l1-1.74a1 1 0 0 0-.37-1.36Z" />
					</g>
				</g>
			</svg>
		);
	}

	if (name === "star") {
		return (
			<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path
					d="M7.14 21.35a1.09 1.09 0 0 1-1.68-1.22l1.86-5.72-4.87-3.53a1.09 1.09 0 0 1 .64-2h17.82a1.09 1.09 0 0 1 .64 2Z"
					style={{
						fill: baseColor,
					}}
				/>
				<path
					d="M11 3.19 7.32 14.41l9.54 6.94a1.09 1.09 0 0 0 1.68-1.22L13 3.19a1.09 1.09 0 0 0-2 0Z"
					style={{
						fill: selected ? indigo : secondaryColor,
					}}
				/>
			</svg>
		);
	}

	return (
		<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				d="M7.14 21.35a1.09 1.09 0 0 1-1.68-1.22l1.86-5.72-4.87-3.53a1.09 1.09 0 0 1 .64-2h17.82a1.09 1.09 0 0 1 .64 2Z"
				style={{
					fill: baseColor,
				}}
			/>
			<path
				d="M11 3.19 7.32 14.41l9.54 6.94a1.09 1.09 0 0 0 1.68-1.22L13 3.19a1.09 1.09 0 0 0-2 0Z"
				style={{
					fill: selected ? indigo : secondaryColor,
				}}
			/>
		</svg>
	);
};

export default Icon;
