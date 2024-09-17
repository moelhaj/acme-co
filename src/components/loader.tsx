export default function Loader() {
	return (
		<div className="grid gap-0.5 grid-cols-2 w-6 h-6">
			<div className="animate-pulse delay-0 w-3 h-3 rounded-[2px] bg-indigo-600" />
			<div className="animate-pulse delay-100 w-3 h-3 rounded-[2px] bg-indigo-500" />
			<div className="animate-pulse delay-200 w-3 h-3 rounded-[2px] bg-indigo-500" />
			<div className="animate-pulse delay-500 w-3 h-3 rounded-[2px] bg-indigo-600" />
		</div>
	);
}
