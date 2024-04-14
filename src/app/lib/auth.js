import { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from "next-auth/providers/github";


export const authOptions= {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    
    }),
    GithubProvider({
        clientId: process.env.GITHUB_APP_CLIENT_ID,
        clientSecret: process.env.GITHUB_APP_CLIENT_SECRET,
      }),
    ],
    session: {
    strategy: 'jwt',
    },

  pages: {
    signIn: "/auth/signin",
  },
};