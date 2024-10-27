type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	title: string;
	avatar?: string | null;
	role: string;
};

type Project = {
	id: string;
	title: string;
	details: string;
	status: string;
	members: User[];
	issues: Issue[];
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
