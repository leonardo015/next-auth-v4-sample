import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ProtectedRoute() {
	const session = await getServerSession(authOptions);
	if (!session || !session.user) {
		redirect("/api/auth/signin");
	}

	return (
		<div>
			This is a protected ProtectedRoute
			<br />
			You will only see this if you are anthenticated.
		</div>
	);
}
