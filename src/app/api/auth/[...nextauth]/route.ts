import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { db } from "../../../../schema";

export const authOptions = {
	providers: [
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
			// maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
		}),
	],
	adapter: DrizzleAdapter(db),
	// secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
