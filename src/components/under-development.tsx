import React from "react";
import Logo from "./logo";

export default function UnderDevelopment() {
	return (
		<div className="w-full h-full min-h-96 flex flex-col justify-center items-center gap-5 text-center">
			<Logo />
			<p className="text-muted-foreground">Under Development</p>
		</div>
	);
}
