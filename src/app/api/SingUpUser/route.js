import dbConnect from "@/lib/Dbconnect";
import User from "@/Model/ModelUser/ModelUser";

// Problem Her =>  Condition check Name / Password
// Problem Her =>  Validtion with Email
// Problem Her => التشفير

export async function POST(req) {
  // logic SingUp

  let { username, password } = await req.json();

  try {
    await dbConnect();

    // check Name and Password
    // Ther is Problem Her
    const CheckName = await User.findOne({ username });
    const CheckPassword = await User.findOne({ password });
    // Ther is Two User True The condition

    // شرطي يعني انني اريد ان يكون الاسم وكلمى السر مختلفان
    // واحضر لي  حسابين مختلفين يحققان الشرطين
    // وهاذه المشكلة يجب ان تحل
    if (CheckName && CheckPassword) {
      // console.log(CheckName);
      // console.log(CheckPassword);

      // if you are need That  Mybe: => redirect to Login page
      return new Response(JSON.stringify({ message: "الحساب موجود بالفعل " }), {
        status: 400,
      });
    }
    // add User In dataBase

    await User.create({
      username: username,
      password: password,
    });

    return new Response(
      JSON.stringify({ message: "تم أنشاء الحساب بنجاج ", name: username }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({ message: "لم يتم أنشاء الحساب !! رجاء حاول مرة اخرى " }),
      {
        status: 400,
      }
    );
  }
}
