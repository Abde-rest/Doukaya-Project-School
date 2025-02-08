import dbConnect from "@/lib/Dbconnect";
import ChapterAndlesson from "@/Model/Chapter&Lesson/ModelChapter&Lesson";

// Get all chpater and Lesson
// export const dynamic = "force-dynamic";
export async function POST(req) {
  // كنت استطيع اراسل البيانات بطريقةاخرى عبر ال url ونخلي الدالة GET
  let { Serachquery } = await req.json();
  console.log(Serachquery);

  let findAllData;

  try {
    await dbConnect();
    if (Serachquery) {
      const regex = new RegExp(Serachquery, "i"); // ✅ `i` يجعل البحث غير حساس لحالة الأحرف
      findAllData = await ChapterAndlesson.aggregate([
        {
          $project: {
            name: 1, // اسم المادة
            level_id: 1, // المستوى
            chapter_1: {
              $filter: {
                input: "$chapter_1",
                as: "lesson",
                cond: {
                  $regexMatch: { input: "$$lesson.title", regex: regex },
                },
              },
            },
            chapter_2: {
              $filter: {
                input: "$chapter_2",
                as: "lesson",
                cond: {
                  $regexMatch: { input: "$$lesson.title", regex: regex },
                },
              },
            },
            chapter_3: {
              $filter: {
                input: "$chapter_3",
                as: "lesson",
                cond: {
                  $regexMatch: { input: "$$lesson.title", regex: regex },
                },
              },
            },
          },
        },
        {
          $match: {
            $or: [
              { "chapter_1.0": { $exists: true } },
              { "chapter_2.0": { $exists: true } },
              { "chapter_3.0": { $exists: true } },
            ],
          },
        },
      ]);
      console.log(findAllData.matchedLessons[0]);
      return new Response(JSON.stringify({ message: "Suuce Serch " }), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      });
    } else {
      findAllData = await ChapterAndlesson.find({});
      return new Response(JSON.stringify(findAllData), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "The is Pr GetAllChapterAndLesson" + error }),
      { status: 400 }
    );
  }
}
