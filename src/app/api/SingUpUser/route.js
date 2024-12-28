import dbConnect from "@/lib/Dbconnect";
import User from "@/Model/ModelUser/ModelUser";
import bcrypt from "bcryptjs";

// ماهي الفكرة التي يطبقونها بعد التسجيل اي كيف يعطي الجلسة

// Problem Her =>  How can Validtion Email ? Is Rialty ?
// adpter MongoDb  => لتحزين الجلسة
export async function POST(req) {
  // logic SingUp
  let {
    //  name,
    email,
    password,
  } = await req.json();

  //  // التحقق من البيانات
  if (!email || !password) {
    return new Response("تاكد من ارسال البيانات رجاء ", { status: 400 });
  }

  try {
    await dbConnect();

    // Find Email
    let checkUser = await User.findOne({ email: email });

    if (checkUser) {
      console.log(checkUser);
      return new Response(JSON.stringify({ message: "الحساب موجود بالفعل " }), {
        status: 400,
      });
    }
    console.log("الحساب غير   موجود حاري الاضافة ");

    // bcrypt The password
    // التشفير احادي الاتجاه لايمكن فك تشفيره
    const hashedPassword = await bcrypt.hash(password, 10);

    // add User In dataBase
    await User.create({
      // name : username
      email: email,
      password: hashedPassword,
    });

    return new Response(
      JSON.stringify({ message: "تم أنشاء الحساب بنجاج ", name: email }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({ message: "حدث خطاء غير متوقع !! رجاء حاول مرة اخرى " }),
      {
        status: 400,
      }
    );
  }
}
