import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Пароль", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch("https://apipizzas.onrender.com/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const data = await res.json();
  
        if (res.ok && data) {
          return data;
        }

        return null
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      return {...token, ...user}
    },

    async session({ session, token, user }) {
      session.user = token;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }