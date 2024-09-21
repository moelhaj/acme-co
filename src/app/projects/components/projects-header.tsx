import { File, ListFilter, PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Home,
	LineChart,
	Package,
	Package2,
	PanelLeft,
	Search,
	ShoppingCart,
	Users2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProjectDialog } from "./project-dialog";
import Icon from "@/lib/icons";

export default function ProjectsHeader() {
	return (
		<div className="flex items-center justify-between">
			<div>
				<Input
					type="search"
					placeholder="Search..."
					className="w-full rounded-lg bg-background md:w-[250px] lg:w-[320px]"
				/>
			</div>
			<div className="flex items-center gap-2">
				<Button size="sm" className="gap-2" variant="secondary">
					<Icon name="export" />
					<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
				</Button>
				<ProjectDialog />
			</div>
		</div>
	);
}
