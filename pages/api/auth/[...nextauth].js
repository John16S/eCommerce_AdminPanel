import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import VkProvider from "next-auth/providers/vk"

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
}
export default NextAuth(authOptions)