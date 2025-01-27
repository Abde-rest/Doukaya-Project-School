import dbConnect from "@/lib/Dbconnect";
// يجب عليك احظار هاذا لانه تحتاج اليه pouplate
import Matersil from "@/Model/Materails/Matersil";
import Level from "@/Model/ModelLevel/MedelLeveles";

export async function POST(req) {
  try {
    let { NumberNevaux } = await req.json();

    await dbConnect();

    // تختاج الة وضع : _id: NumberNevaux
    const LevelData = await Level.findOne({ _id: NumberNevaux }).populate(
      "materials"
    );

    console.log("Fetched Level Data:", LevelData);

    return new Response(JSON.stringify(LevelData), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in API route:", error);

    return new Response(
      JSON.stringify({ message: "Error occurred", error: error.message }),
      { status: 500 }
    );
  }
}
