import dbConnect from "@/lib/Dbconnect";
import User from "@/Model/ModelUser/ModelUser";
export const dynamic = "force-dynamic"; // 🚀 تعطيل الكاش نهائيًا
export async function GET(req) {
  try {
    await dbConnect();
    //  هناك مشكلة هنا وهيا انه سوف يحلب بيانات من chach وليس بيانات جديثة
    // الحل استما heders تحديد cach controle
    let AllDataUers = await User.find({});
    return new Response(JSON.stringify(AllDataUers), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "هناك مشكلة في جلب البيانات " }),
      { status: 400 }
    );
  }
}
