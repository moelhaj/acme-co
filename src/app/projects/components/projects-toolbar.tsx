import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function ProjectsToolbar() {
	return (
		<div className="flex items-center justify-between">
			<div>
				<Input placeholder="Search projects" />
			</div>
			<div>
				<Button>Add</Button>
			</div>
		</div>
	);
}
