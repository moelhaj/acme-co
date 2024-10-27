import { PrismaClient } from "@prisma/client";
import bycrypt from "bcryptjs";

const prisma = new PrismaClient();

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

async function main() {
	users.forEach(async user => {
		const { password, ...rest } = user;
		const hashedPassword = await bycrypt.hash(password, 10);
		await prisma.user.upsert({
			where: { email: user.email },
			update: {},
			create: {
				...rest,
				password: hashedPassword,
			},
		});
	});
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
