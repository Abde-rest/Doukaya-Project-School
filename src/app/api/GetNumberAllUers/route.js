import dbConnect from "@/lib/Dbconnect";
import User from "@/Model/ModelUser/ModelUser";

export async function GET(req) {
  try {
    // await dbConnect();

    let resulte = await User.find();
    let NubmerUers = resulte.length;
    return new Response(JSON.stringify(NubmerUers), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        messgae: "Ther is Problem in Get number users api route  ",
      }),
      {
        status: 400,
      }
    );
  }
}
