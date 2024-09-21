"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { signIn } from "@/actions/auth";
import { useState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { TbEye, TbEyeClosed, TbSquareRoundedCheckFilled } from "react-icons/tb";
import { cn } from "@/lib/utils";

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
			<Card className="mx-auto max-w-sm">
				<CardHeader>
					<CardTitle>Sign in</CardTitle>
				</CardHeader>
				<CardContent>
					<form action={formAction} className="grid gap-5 w-auto md:w-80">
						<div className="space-y-2">
							<p className="text-muted-foreground">Experience as:</p>
							<div className="flex items-center gap-5">
								<div
									className="flex gap-1 items-center cursor-pointer"
									onClick={() => setEmail("maeve.millay@codex.com")}
								>
									<TbSquareRoundedCheckFilled
										size={15}
										className={cn(
											email === "maeve.millay@codex.com"
												? "text-primary"
												: "text-muted-foreground"
										)}
									/>
									<span
										className={cn(
											email === "maeve.millay@codex.com"
												? ""
												: "text-muted-foreground"
										)}
									>
										Product Manager
									</span>
								</div>
								<div
									className="flex gap-1 items-center cursor-pointer"
									onClick={() => setEmail("bernard.lowe@codex.com")}
								>
									<TbSquareRoundedCheckFilled
										size={15}
										className={cn(
											email === "bernard.lowe@codex.com"
												? "text-primary"
												: "text-muted-foreground"
										)}
									/>
									<span
										className={cn(
											email === "bernard.lowe@codex.com"
												? ""
												: "text-muted-foreground"
										)}
									>
										Developer
									</span>
								</div>
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								autoFocus
								name="email"
								type="email"
								value={email}
								readOnly
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="grid gap-2 relative">
								<Label htmlFor="password">Password</Label>
								<Input
									name="password"
									value={password}
									readOnly
									type={showPassword ? "text" : "password"}
									required
								/>
								<div
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-2 top-[1.72rem] p-1 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-md transition-all"
								>
									{showPassword ? <TbEyeClosed size={17} /> : <TbEye size={17} />}
								</div>
							</div>
						</div>
						{state?.message && (
							<div className="flex items-center justify-center text-rose-600 bg-rose-100 rounded-md p-2">
								{state?.message}
							</div>
						)}

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
