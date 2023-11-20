import NextAuth, { SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "pg";

const pool = new Pool({
	host: process.env.POSTGRES_HOST,
	database: process.env.POSTGRES_DATABASE,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	ssl: true,
});

const sessionStrat: SessionStrategy = "database";

export const authOptions = {
	adapter: PostgresAdapter(pool),
	session: { strategy: sessionStrat },
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
		}),
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
		}),
	],
	callbacks: {
		async signIn({
			user,
			account,
			profile,
			email,
			credentials,
		}: {
			user: any;
			account: any;
			profile?: any;
			email?: any;
			credentials?: any;
		}) {
			console.log("BEGIN OF SIGNIN CALLBACK");
			console.log("user:");
			console.log(user);
			console.log("account:");
			console.log(account);
			console.log("profile:");
			console.log(profile);
			console.log("email:");
			console.log(email);
			console.log("credentials:");
			console.log(credentials);
			console.log("END OF SIGNIN CALLBACK");

			// return true to allow user sign in, false to display deafult error message, a (relative) url to redirect eg "/unauthorized"
			return true;
		},
		async session({
			session,
			token,
			user,
		}: {
			session: any;
			token: any;
			user: any;
		}) {
			console.log("BEGIN OF SESSION CALLBACK");
			console.log("session:");
			console.log(session);
			console.log("token:");
			console.log(token);
			console.log("user:");
			console.log(user);
			console.log("END OF SESSION CALLBACK");

			// Send properties to the client
			return session;
		},
	},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
