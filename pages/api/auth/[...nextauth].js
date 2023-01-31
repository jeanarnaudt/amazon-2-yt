import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import GitHubProvider from 'next-auth/providers/github'
// import FacebookProvider from 'next-auth/providers/facebook'

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// GitHubProvider({
		// 	clientId: process.env.GITHUB_CLIENT_ID,
		// 	clientSecret: process.env.GITHUB_CLIENT_SECRET,
		// }),
		// FacebookProvider({
		// 	clientId: process.env.FACEBOOK_CLIENT_ID,
		// 	clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		// }),
		// ...add more providers here
	],

	//  A database is optional, but required to persist accounts in a database
	// database: process.env.DATABASE_URL,
})
