import dbConnect from "@/lib/Dbconnect";
import ChapterAndlesson from "@/Model/Chapter&Lesson/ModelChapter&Lesson";
export async function POST(req) {
  try {
    let { OneMaterial, NumberNevaux } = await req.json();
    await dbConnect();
    const Chapter_Lesson_Data = await ChapterAndlesson.findOne({
      nameEn: OneMaterial,
      level_id: NumberNevaux,
    });
    return new Response(JSON.stringify(Chapter_Lesson_Data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in API route Chapter and Lessone :", error);
    return new Response(
      JSON.stringify({
        message: "حدث خطاء ما في جلب الدروس ",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
