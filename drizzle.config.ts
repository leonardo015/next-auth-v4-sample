import type { Config } from "drizzle-kit";

export default {
	schema: "./src/app/api/auth/[...nextauth]/schema.ts",
	out: "./drizzle/migrations",
	driver: "pg",
	dbCredentials: {
		host: "ep-divine-boat-42809153-pooler.us-east-1.postgres.vercel-storage.com",
		user: "default",
		password: "C3FzEb4LpPSc",
		database: "verceldb",
	},
} satisfies Config;
