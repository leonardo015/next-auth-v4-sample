import { getServerSession } from "next-auth";

export default async function Home() {
	const session = await getServerSession();

	return (
		<>
			getServerSession Result
			{session?.user?.email ? (
				<div>
					<h3>Logged in as</h3>
					<span>Name: {session?.user?.email}</span>
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
