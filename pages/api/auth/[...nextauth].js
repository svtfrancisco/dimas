import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

console.log(process.env.GITHUB_ID);
console.log(process.env.GITHUB_SECRET);

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: "banana@123",
});
