import dbConnect from "@/lib/Dbconnect";
import User from "@/Model/ModelUser/ModelUser";
export async function GET(req) {
  try {
    await dbConnect();
    let AllDataUers = await User.find({});
    return new Response(JSON.stringify(AllDataUers), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "هناك مشكلة في جلب البيانات " + error }),
      { status: 400 }
    );
  }
}
