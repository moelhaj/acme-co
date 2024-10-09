import { Suspense } from "react";
import ChartBlock from "./chart-block";
import Loader from "@/components/loader";

export default function DashboardPage() {
	return (
		<Suspense fallback={<Loader />}>
			<div className="p-3">
				<ChartBlock />
			</div>
		</Suspense>
	);
}
