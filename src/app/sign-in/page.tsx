"use client";
import { signIn } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { cn } from "@/lib/utils";

const initialState = {
	message: "",
};

export default function SignIn() {
	const [email, setEmail] = useState("maeve.millay@codex.com");
	const [password] = useState("password");
	const [showPassword, setShowPassword] = useState(false);
	const [state, formAction] = useFormState(signIn, initialState);
	console.log(state);
	return (
		<div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 fixed z-50 inset-0 bg-background">
			<div className="hidden md:flex p-3 w-full h-20 md:h-full">
				<div className="bg-primary text-white rounded-xl p-6 w-full h-20 md:h-full grid place-content-center">
					<p className="font-semibold text-lg">Important Notice: </p>
					<p>
						This website is a demo version created for personal use. Please do not enter
						any sensitive or personal information, as the data submitted here is not
						stored securely and will be deleted every 24 hours. By using this site, you
						acknowledge that no liability will be accepted for any data entered. Thank
						you for understanding!
					</p>
				</div>
			</div>
			<div className="md:flex-1 flex justify-center p-3">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="md:hidden bg-primary text-white rounded-xl p-3 w-full md:h-full grid place-content-center">
						<p className="font-semibold text-base">Important Notice: </p>
						<p className="text-xs">
							This website is a demo version created for personal use. Please do not
							enter any sensitive or personal information, as the data submitted here
							is not stored securely and will be deleted every 24 hours. By using this
							site, you acknowledge that no liability will be accepted for any data
							entered. Thank you for understanding!
						</p>
					</div>
					<div className="grid gap-2">
						<h1 className="text-3xl font-bold">Login</h1>
						<p className="text-balance text-muted-foreground">
							Experience the system as:
						</p>
					</div>

					<div className="grid grid-cols-2 gap-2">
						<div
							className={cn(
								"flex gap-2 cursor-pointer px-4 py-2 rounded-lg border",
								email === "maeve.millay@codex.com"
									? "border-primary"
									: "border-muted"
							)}
							onClick={() => setEmail("maeve.millay@codex.com")}
						>
							<Image
								src="/maeve-millay.png"
								alt="Maeve Millay"
								width={25}
								height={25}
								className="h-6 w-6 rounded-full object-contain"
							/>
							<div>
								<p className="text-xs font-semibold">Maeve Millay</p>
								<p className="text-xs text-muted-foreground leading-3">
									Product Manager
								</p>
							</div>
						</div>
						<div
							className={cn(
								"flex gap-2 cursor-pointer px-4 py-2 rounded-lg border",
								email === "bernard.lowe@codex.com"
									? "border-primary"
									: "border-muted"
							)}
							onClick={() => setEmail("bernard.lowe@codex.com")}
						>
							<Image
								src="/bernard-lowe.png"
								alt="Bernard Lowe"
								width={25}
								height={25}
								className="h-6 w-6 rounded-full object-contain"
							/>
							<div>
								<p className="text-xs font-semibold">Bernard Lowe</p>
								<p className="text-xs text-muted-foreground leading-3">Developer</p>
							</div>
						</div>
					</div>

					<form action={formAction} className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input name="email" type="email" value={email} readOnly required />
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
							</div>
							<Input
								name="password"
								value={password}
								readOnly
								type={showPassword ? "text" : "password"}
								required
							/>
							<div className="flex items-center space-x-2">
								<Checkbox
									id="show-password"
									checked={showPassword}
									onCheckedChange={checked => setShowPassword(checked === true)}
								/>
								<label
									htmlFor="show-password"
									className="text-balance text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Show password
								</label>
							</div>
						</div>
						<SubmitButton />
					</form>
				</div>
			</div>
		</div>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button color="primary" type="submit" disabled={pending}>
			{pending ? "Singing in..." : "Sign in"}
		</Button>
	);
}
