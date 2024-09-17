import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitButton({
	text,
	styles,
	loading,
}: {
	text: string;
	styles?: string;
	loading: string;
}) {
	const { pending } = useFormStatus();
	return (
		<Button disabled={pending} type="submit" className={styles}>
			{pending ? loading : text}
		</Button>
	);
}
