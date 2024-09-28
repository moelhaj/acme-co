"use client";
import { signIn } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
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
	return (
		<div className="fixed z-50 inset-0 w-screen h-screen grid place-content-center bg-background p-3">
			<Card>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Sign in</CardTitle>
					<CardDescription>Experience the system as:</CardDescription>
					<div className="grid grid-cols-2 gap-2">
						<Button
							type="button"
							onClick={() => setEmail("maeve.millay@codex.com")}
							variant={email === "maeve.millay@codex.com" ? "secondary" : "outline"}
							className="w-full"
						>
							Product Manager
						</Button>
						<Button
							type="button"
							onClick={() => setEmail("bernard.lowe@codex.com")}
							variant={email === "bernard.lowe@codex.com" ? "secondary" : "outline"}
							className="w-full"
						>
							Developer
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					<form action={formAction} className="grid gap-5">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email" value={email} readOnly required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
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
				</CardContent>
			</Card>
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
