import dbConnect from "@/lib/Dbconnect";
import ChapterAndlesson from "@/Model/Chapter&Lesson/ModelChapter&Lesson";
// Get all chpater and Lesson
export async function GET(req) {
  try {
    await dbConnect();

    let findAllData = await ChapterAndlesson.find({});

    return new Response(JSON.stringify(findAllData), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(
      { message: "The is Pr GetAllChapterAndLesson" + error },
      { status: 400 }
    );
  }
}
