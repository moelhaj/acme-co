type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	title: string;
	avatar: string;
	role: "admin" | "user";
};

type Project = {
	id: string;
	title: string;
	details: string;
	status: "on track" | "paused" | "cancel";
	members: string;
};

type Issue = {
	id: string;
	title: string;
	description: string;
	status: "to do" | "in progress" | "in review" | "done";
	severity: "minor" | "major" | "critical";
	userId: string;
	projectId: string;
};
