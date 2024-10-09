"use client";
import { signIn } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Checkbox } from "@/components/ui/checkbox";

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
				<div className="bg-muted rounded-xl p-6 w-full h-20 md:h-full grid place-content-center">
					<p>
						This website is just a demo. Please do not enter any personal information.
					</p>
				</div>
			</div>
			<div className="md:flex-1 flex items-center justify-center py-12 px-3">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="md:hidden bg-muted rounded-xl p-6 w-full h-20 md:h-full grid place-content-center">
						<p>
							This website is just a demo. Please do not enter any personal
							information.
						</p>
					</div>
					<div className="grid gap-2">
						<h1 className="text-3xl font-bold">Login</h1>
						<p className="text-balance text-muted-foreground">
							Experience the system as:
						</p>
					</div>

					<div className="grid grid-cols-2 gap-2">
						<Button
							type="button"
							onClick={() => setEmail("maeve.millay@codex.com")}
							variant={email === "maeve.millay@codex.com" ? "secondary" : "outline"}
							className="w-full"
							size="sm"
						>
							Product Manager
						</Button>
						<Button
							type="button"
							onClick={() => setEmail("bernard.lowe@codex.com")}
							variant={email === "bernard.lowe@codex.com" ? "secondary" : "outline"}
							className="w-full"
							size="sm"
						>
							Developer
						</Button>
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
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
