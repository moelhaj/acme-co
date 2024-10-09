const { db } = require("@vercel/postgres");
const { hash } = require("bcryptjs");

const users = [
	{
		name: "Maeve Millay",
		email: "maeve.millay@codex.com",
		role: "admin",
		password: "password",
		avatar: "maeve-millay.png",
		title: "Product Manager",
	},
	{
		name: "Bernard Lowe",
		email: "bernard.lowe@codex.com",
		role: "user",
		password: "password",
		avatar: "bernard-lowe.png",
		title: "Frontend Developer",
	},
	{
		name: "Dolores Abernathy",
		email: "dolores.abernathy@codex.com",
		role: "user",
		password: "password",
		avatar: "dolores-abernathy.png",
		title: "Backend Developer",
	},
	{
		name: "Robert Ford",
		email: "robert.ford@codex.com",
		role: "user",
		password: "password",
		avatar: "robert-ford.png",
		title: "Full-Stack Developer",
	},
	{
		name: "Clementine Pennyfeather",
		email: "clementine.pennyfeather@codex.com",
		role: "user",
		password: "password",
		avatar: "clementine-pennyfeather.png",
		title: "QA Engineer",
	},
];

async function seedUsers(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
		await client.sql`CREATE TYPE ROLE AS ENUM ('admin', 'user')`;
		const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            title TEXT NOT NULL,
            avatar TEXT,
            role ROLE
        );
        `;
		const insertedUsers = await Promise.all(
			users.map(async user => {
				const hashedPassword = await hash(user.password, 10);
				return client.sql`
        INSERT INTO users (name, email, password, role, avatar, title)
        VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.role}, ${user.avatar}, ${user.title})
        ON CONFLICT (id) DO NOTHING;
      `;
			})
		);

		console.info(`Seeded ${insertedUsers.length} users`);

		return {
			createTable,
			users: insertedUsers,
		};
	} catch (error) {
		console.error("Error seeding users:", error);
		throw error;
	}
}

async function seedProjects(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
		await client.sql`DROP TYPE IF EXISTS PROJECT_STATUS`;
		await client.sql`CREATE TYPE PROJECT_STATUS AS ENUM ('on track', 'paused', 'cancel')`;
		const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS projects (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title TEXT NOT NULL,
        details TEXT NOT NULL,
        status PROJECT_STATUS default 'on track',
        members TEXT[],
        timestamp timestamp default current_timestamp
    );
    `;

		return {
			createTable,
		};
	} catch (error) {
		console.error("Error seeding projects:", error);
		throw error;
	}
}

async function seedIssues(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
		await client.sql`DROP TYPE IF EXISTS ISSUE_STATUS`;
		await client.sql`CREATE TYPE ISSUE_STATUS AS ENUM ('to do', 'in progress','in review','done')`;
		await client.sql`DROP TYPE IF EXISTS SEVERITY`;
		await client.sql`CREATE TYPE SEVERITY AS ENUM ('minor','major','critical')`;

		const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS issues (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            title TEXT NOT NULL,
            details TEXT NOT NULL,
            status ISSUE_STATUS,
            severity SEVERITY,
            timestamp timestamp default current_timestamp,
            project_id UUID,
            CONSTRAINT fk_project
                FOREIGN KEY(project_id) 
                REFERENCES projects(id),
            user_id UUID,
            CONSTRAINT fk_user
                FOREIGN KEY(user_id) 
                REFERENCES users(id)
        );
        `;

		return {
			createTable,
		};
	} catch (error) {
		console.error("Error seeding customers:", error);
		throw error;
	}
}

async function main() {
	const client = await db.connect();
	await seedUsers(client);
	await seedProjects(client);
	await seedIssues(client);
	await client.end();
}

main().catch(err => {
	console.error("An error occurred while attempting to seed the database:", err);
});
