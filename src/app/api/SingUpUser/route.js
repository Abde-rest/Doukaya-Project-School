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
    Rols,
  } = await req.json();
  console.log(email);
  console.log(password);
  console.log(Rols);

  //  // التحقق من البيانات
  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "تأكد من ارسال البيانات رجاء " }),
      {
        status: 400,
      }
    );
  }

  try {
    await dbConnect();

    // Find Email
    let checkUser = await User.findOne({ email: email });

    if (checkUser) {
      console.log("Ther is Redy Users : ");

      console.log(checkUser);
      return new Response(JSON.stringify({ message: "الحساب موجود بالفعل " }), {
        status: 400,
      });
    }
    // bcrypt The password
    // التشفير احادي الاتجاه لايمكن فك تشفيره
    const hashedPassword = await bcrypt.hash(password, 10);

    // add User In dataBase
    await User.create({
      // name : username
      email: email,
      password: hashedPassword,
      role: Rols,
    });

    return new Response(JSON.stringify({ message: "تم أنشاء الحساب بنجاج " }), {
      status: 201,
    });
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
