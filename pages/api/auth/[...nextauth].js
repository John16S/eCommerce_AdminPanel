import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import VkProvider from "next-auth/providers/vk"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        VkProvider({
            clientId: process.env.VK_CLIENT_ID,
            clientSecret: process.env.VK_CLIENT_SECRET
        })
        // ...add more providers here
    ],
    adapter: PrismaAdapter(prisma),
}
export default (req, res) => NextAuth(req, res, authOptions)