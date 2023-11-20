import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<>
			getServerSession Result
			{session?.user?.name ? (
				<div>
					<h3>Logged in as</h3>
					<span>Name: {session?.user?.name}</span>
					{/* <span>Email: {session?.user?.email}</span>
					<span>
						Photo:{" "}
						<Image
							src={session?.user?.image}
							width="200"
							height="200"
							alt={`${session?.user?.name}'s profile picture`}
							priority={true}
						/>
					</span> */}
				</div>
			) : (
				<div>Not logged in</div>
			)}
		</>
	);
}
