import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/Dbconnect";
import User from "@/Model/ModelUser/ModelUser";
import bcrypt from "bcryptjs";
// Where Is Adapter MongoDb
// Ther os Problem Her

export let authoption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // logic  Login Her
        await dbConnect();
        let { email, password } = credentials;

        let user = await User.findOne({ email });
        console.log("Role الخاص به هو ");
        console.log(user);

        if (!user) {
          throw new Error("الحساب غير موجود  !!  رجاء أنشئ حساب");
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
          throw new Error(" كلمة المرور  غير صحيحة   ");
        }

        // return { email: user.email, role: user.role };
        return { id: user._id, email: user.email, role: user.role };
      },
    }),
  ],
  pages: {
    signIn: "/Login", // صفحة تسجيل الدخول
    newUser: "/SignUp", // صفحة التسجيل
  },
  // secret: ,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // الجلسة تستمر لمدة 30 يومًا
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role; // حفظ الدور في الـ JWT
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role; // حفظ الدور في `session`
      }
      return session;
    },
  },
};

const handler = NextAuth(authoption);

export { handler as GET, handler as POST };

// // src/app/api/auth/[...nextauth]/route.js
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
// import User from "@/models/User"; // موديل المستخدم
// import connectDB from "@/utils/connectDB"; // الاتصال بقاعدة البيانات

// const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         await connectDB();

//         const { email, password } = credentials;

//         const user = await User.findOne({ email });

//         if (!user) {
//           throw new Error("No user found");
//         }

//         const isValidPassword = await bcrypt.compare(password, user.password);

//         if (!isValidPassword) {
//           throw new Error("Invalid credentials");
//         }

//         return { id: user._id, name: user.name, email: user.email };
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id;
//       }
//       return session;
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
