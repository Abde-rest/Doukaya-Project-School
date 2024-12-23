// import authoption from "@/app/api/OptionAuth/authOption";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/Dbconnect";
import User from "@/Model/ModelUser/ModelUser";

// Where Is Adapter MongoDb

// Ther os Problem Her

export let authoption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // logic  Login Her
        await dbConnect();
        let { username, password } = credentials;
        // check Name and Password
        // اعتقد انه هناك منطق اخر يوفر الفكرة تاع البحث عن الحساب
        //
        const CheckName = await User.findOne({ username });
        const CheckPassword = await User.findOne({ password });
        //
       

        // مقارنة كلمة المرور المدخلة بكلمة المرور المخزنة?????

        //
        if (CheckName && CheckPassword) {
          // Ther are Not message expend User is Login Sesscus
          return { name: credentials.username };
        } else {
          throw new Error("الحساب غير موجود  !!  رجاء أنشئ حساب");
        }
      },
    }),
  ],
  pages: {
    signIn: "/Login", // صفحة تسجيل الدخول
    newUser: "/SingUp", // صفحة التسجيل
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // الجلسة تستمر لمدة 30 يومًا
  },
};

const handler = NextAuth(authoption);

export { handler as GET, handler as POST };
