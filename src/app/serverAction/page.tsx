import { getServerSession } from "next-auth";
import WhoAmIButton from "./WhoAmIButton";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ServerActionPage() {
	const whoAmI = async () => {
		"use server";
		const session = await getServerSession(authOptions);
		return session?.user?.name || "Not Logged In";
	};

	return (
		<div>
			<WhoAmIButton whoAmIAction={whoAmI} />
		</div>
	);
}
