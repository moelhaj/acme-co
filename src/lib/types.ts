import { ProjectStatus, UserRoles, IssueSeverity, IssueStatus } from "@prisma/client";

export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	title: string;
	avatar?: string | null;
	role: UserRoles;
};

export type Project = {
	id: string;
	title: string;
	details: string;
	status: ProjectStatus;
	users: User[];
	issues: Issue[];
};

export type Issue = {
	id: string;
	title: string;
	description: string;
	status: IssueStatus;
	severity: IssueSeverity;
	userId: string;
	projectId: string;
};
