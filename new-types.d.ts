import { ProjectStatus, UserRoles, IssueSeverity, IssueStatus } from "@prisma/client";

type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	title: string;
	avatar?: string | null;
	role: UserRoles;
};

type Project = {
	id: string;
	title: string;
	details: string;
	status: ProjectStatus;
	users: User[];
	issues: Issue[];
};

type Issue = {
	id: string;
	title: string;
	description: string;
	status: IssueStatus;
	severity: IssueSeverity;
	userId: string;
	projectId: string;
};
