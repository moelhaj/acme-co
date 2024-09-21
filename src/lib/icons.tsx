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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M14.447 1.106a1 1 0 0 1 .447 1.341L14.118 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3.882l-.776-1.553a1 1 0 0 1 1.788-.894L12 3.763l1.106-2.21a1 1 0 0 1 1.341-.447Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M12 9c-1.54 0-2.502 1.667-1.732 3 .357.619 1.017 1 1.732 1 1.54 0 2.502-1.667 1.732-3A1.999 1.999 0 0 0 12 9Zm1.5 5h-3a2.5 2.5 0 0 0-2.495 2.336L8 16.5v.5a1 1 0 0 0 1.993.117L10 17v-.5a.5.5 0 0 1 .41-.492L10.5 16h3a.5.5 0 0 1 .492.41l.008.09v.5a1 1 0 0 0 1.993.117L16 17v-.5a2.5 2.5 0 0 0-2.336-2.495L13.5 14Z"
					className="duoicon-primary-layer"
				></path>
			</svg>
		);
	}

	if (name === "tasks") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					d="M8.75 13A2.25 2.25 0 0 1 11 15.25v3.5A2.25 2.25 0 0 1 8.75 21h-3.5A2.25 2.25 0 0 1 3 18.75v-3.5A2.25 2.25 0 0 1 5.25 13h3.5Zm10-10A2.25 2.25 0 0 1 21 5.25v3.5A2.25 2.25 0 0 1 18.75 11h-3.5A2.25 2.25 0 0 1 13 8.75v-3.5A2.25 2.25 0 0 1 15.25 3h3.5Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
				<path
					fill="currentColor"
					d="M8.75 3A2.25 2.25 0 0 1 11 5.25v3.5A2.25 2.25 0 0 1 8.75 11h-3.5A2.25 2.25 0 0 1 3 8.75v-3.5A2.25 2.25 0 0 1 5.25 3h3.5Z"
					className="duoicon-primary-layer"
				></path>
				<path
					fill="currentColor"
					d="M18.75 13A2.25 2.25 0 0 1 21 15.25v3.5A2.25 2.25 0 0 1 18.75 21h-3.5A2.25 2.25 0 0 1 13 18.75v-3.5A2.25 2.25 0 0 1 15.25 13h3.5Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
			</svg>
		);
	}

	if (name === "add") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
				<path
					fill="currentColor"
					d="M12 7a1 1 0 0 0-.993.883L11 8v3H8a1 1 0 0 0-.117 1.993L8 13h3v3a1 1 0 0 0 1.993.117L13 16v-3h3a1 1 0 0 0 .117-1.993L16 11h-3V8a1 1 0 0 0-1-1Z"
					className="duoicon-primary-layer"
				></path>
			</svg>
		);
	}

	if (name === "export") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					fill-rule="evenodd"
					d="M12 2v6.5a1.5 1.5 0 0 0 1.356 1.493L13.5 10H20v10a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2h6Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
				<path
					fill="currentColor"
					fill-rule="evenodd"
					d="M14 2.043a2 2 0 0 1 .877.43l.123.113L19.414 7c.234.234.407.523.502.84l.04.16H14V2.043Zm-2.707 9.13-2.121 2.121a1 1 0 1 0 1.414 1.414l.414-.414V17a1 1 0 1 0 2 0v-2.706l.414.414a1 1 0 1 0 1.414-1.414l-2.12-2.121a1 1 0 0 0-1.415 0Z"
					className="duoicon-primary-layer"
				></path>
			</svg>
		);
	}

	if (name === "sun") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					d="M12 18.5a1.5 1.5 0 0 1 1.493 1.356L13.5 20v1a1.5 1.5 0 0 1-2.993.144L10.5 21v-1a1.5 1.5 0 0 1 1.5-1.5Zm0-17a1.5 1.5 0 0 1 1.493 1.356L13.5 3v1a1.5 1.5 0 0 1-2.993.144L10.5 4V3A1.5 1.5 0 0 1 12 1.5Zm5.303 3.075a1.5 1.5 0 0 1 2.225 2.008l-.103.114-.707.707a1.5 1.5 0 0 1-2.225-2.008l.103-.114.707-.707Zm-12.728 0a1.5 1.5 0 0 1 2.008-.103l.114.103.707.707a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-.707-.707a1.5 1.5 0 0 1 0-2.122ZM21 10.5a1.5 1.5 0 0 1 .144 2.993L21 13.5h-1a1.5 1.5 0 0 1-.144-2.993L20 10.5h1Zm-17 0a1.5 1.5 0 0 1 .144 2.993L4 13.5H3a1.5 1.5 0 0 1-.144-2.993L3 10.5h1Z"
					className="duoicon-primary-layer"
				></path>
				<path
					fill="currentColor"
					d="M12 6c4.619 0 7.506 5 5.196 9A6 6 0 0 1 12 18c-4.619 0-7.506-5-5.196-9A6 6 0 0 1 12 6Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
				<path
					fill="currentColor"
					d="M5.282 16.596a1.5 1.5 0 0 1 2.225 2.008l-.103.114-.707.707a1.5 1.5 0 0 1-2.225-2.008l.103-.114.707-.707Zm11.314 0a1.5 1.5 0 0 1 2.008-.103l.114.103.707.707a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-.707-.707a1.5 1.5 0 0 1 0-2.122Z"
					className="duoicon-primary-layer"
				></path>
			</svg>
		);
	}

	if (name === "bell") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					d="M9.042 19.003h5.916c-.385 2.277-3.09 3.283-4.87 1.811a3 3 0 0 1-1.046-1.811Z"
					className="duoicon-primary-layer"
				></path>
				<path
					fill="currentColor"
					d="M12 2.003a7.5 7.5 0 0 1 7.5 7.5v4l1.418 3.16A.95.95 0 0 1 20.052 18h-16.1a.95.95 0 0 1-.867-1.338l1.415-3.16V9.49l.005-.25A7.5 7.5 0 0 1 12 2.004v-.001Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
			</svg>
		);
	}

	if (name === "settings") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M9.965 2.809a1.51 1.51 0 0 0-1.401-.203 10.007 10.007 0 0 0-2.982 1.725 1.51 1.51 0 0 0-.524 1.313c.075.753-.058 1.48-.42 2.106-.361.627-.925 1.106-1.615 1.417-.458.203-.786.62-.875 1.113a10.035 10.035 0 0 0 0 3.44c.093.537.46.926.875 1.114.69.31 1.254.79 1.616 1.416.361.627.494 1.353.419 2.106-.045.452.107.964.524 1.313a10.007 10.007 0 0 0 2.982 1.725c.471.169.996.093 1.4-.203.615-.442 1.312-.691 2.036-.691s1.42.249 2.035.691c.37.266.89.39 1.401.203a10.007 10.007 0 0 0 2.982-1.725c.417-.349.57-.86.524-1.313-.075-.753.057-1.48.42-2.106.361-.627.925-1.105 1.615-1.416.414-.188.782-.577.875-1.114a10.085 10.085 0 0 0 0-3.44 1.512 1.512 0 0 0-.875-1.113c-.69-.311-1.254-.79-1.616-1.417-.362-.626-.494-1.353-.419-2.106a1.513 1.513 0 0 0-.524-1.313 10.007 10.007 0 0 0-2.982-1.725 1.514 1.514 0 0 0-1.4.203C13.42 3.25 12.723 3.5 12 3.5c-.723 0-1.42-.249-2.035-.691Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M9 12c0-2.309 2.5-3.753 4.5-2.598A3 3 0 0 1 15 12c0 2.309-2.5 3.753-4.5 2.598A3 3 0 0 1 9 12Z"
					className="duoicon-primary-layer"
				></path>
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7h18Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
				<path
					fill="currentColor"
					d="M16 3a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v3H3V7a2 2 0 0 1 2-2h2V4a1 1 0 1 1 2 0v1h6V4a1 1 0 0 1 1-1Z"
					className="duoicon-primary-layer"
				></path>
			</svg>
		);
	}

	if (name === "dashboard") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M19 11a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-6a2 2 0 0 1 1.85-1.995L15 11h4Zm0-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4Z"
					className="duoicon-primary-layer"
				></path>
				<path
					fill="currentColor"
					fillRule="evenodd"
					d="M9 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
			</svg>
		);
	}

	if (name === "projects") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					d="M19.82 6a2 2 0 0 1 1.972 2.329l-1.666 10A2 2 0 0 1 18.153 20H5.847a2 2 0 0 1-1.973-1.671l-1.666-10A2 2 0 0 1 4.18 6h15.64Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
				<path
					fill="currentColor"
					d="M18 3a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h12Z"
					className="duoicon-primary-layer"
				></path>
			</svg>
		);
	}

	if (name === "moon") {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="66"
				height="66"
				viewBox="0 0 24 24"
				className="w-5 h-5 duoicon duoicon-dashboard text-[rgb(75, 85, 99)]"
			>
				<path
					fill="currentColor"
					d="M12.477 4.546A1.01 1.01 0 0 1 13.5 3.127c.025.002.049.006.074.01 6.821 1.213 9.771 9.356 5.31 14.656-4.462 5.301-12.988 3.784-15.348-2.73a9.012 9.012 0 0 1-.399-1.489 1.01 1.01 0 0 1 1.339-1.125c.024.008.047.018.07.028 4.214 1.892 8.895-1.488 8.426-6.083a5.998 5.998 0 0 0-.495-1.848Z"
					className="duoicon-secondary-layer"
					opacity=".3"
				></path>
				<path
					fill="currentColor"
					d="M8.397 2.857c.04-.09.166-.09.206 0l.102.222a5.191 5.191 0 0 0 1.97 2.172l.157.092c.073.04.075.144.003.187l-.003.002-.158.092a5.193 5.193 0 0 0-2.07 2.394.113.113 0 0 1-.195.022c-.004-.007-.009-.014-.012-.022l-.102-.222a5.191 5.191 0 0 0-1.97-2.172l-.158-.092a.108.108 0 0 1-.003-.187l.003-.002.158-.092a5.191 5.191 0 0 0 1.97-2.172l.102-.222ZM5.565 7.716l.064.14a3.257 3.257 0 0 0 1.237 1.363l.1.059a.068.068 0 0 1 0 .118l-.1.058a3.26 3.26 0 0 0-1.237 1.364l-.064.14a.07.07 0 0 1-.122.013.057.057 0 0 1-.008-.013l-.064-.14a3.26 3.26 0 0 0-1.237-1.364l-.1-.058a.068.068 0 0 1 0-.118l.1-.059c.534-.326.964-.8 1.236-1.364l.064-.14a.07.07 0 0 1 .122-.013.057.057 0 0 1 .008.013l.001.001Z"
					className="duoicon-primary-layer"
				></path>
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
