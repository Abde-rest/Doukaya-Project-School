import dbConnect from "@/lib/Dbconnect";
import ChapterAndlesson from "@/Model/Chapter&Lesson/ModelChapter&Lesson";
import Material from "@/Model/Materails/Matersil";
export async function POST(req) {
  try {
    // بما أنك تستخدم API Routes في Next.js،
    //  فإن req.body لن يحتوي على البيانات المرسلة بتنسيق FormData
    //  تلقائيًا. تحتاج إلى استخدام مكتبة مثل formidable أو multer لمعالجة البيانات.

    // لا يمكن استقبال FormData مباشرة في API Route باستخدام req.json() لأن App Router في Next.js لا يعالج البيانات بصيغة multipart/form-data تلقائيًا.
    let DateLesson = await req.json();
    await dbConnect();
    const durationInMinutes = (DateLesson.durationVedio / 60).toFixed(2);

    let chapterSelcet = DateLesson.ChapterLesson;
    let UpdateLesson = await ChapterAndlesson.findOneAndUpdate(
      {
        // الشروط == filter
        nameEn: DateLesson.MaterialLesson,
        level_id: DateLesson.YeraLesson,
      },
      {
        $push: {
          // تعني انا هاذا  متغير وليس حفل
          [chapterSelcet]: {
            title: DateLesson.nameLesson,
            description: DateLesson.DescriptionLesson,
            link: DateLesson.VedioLesson,
            MinutesVedio: durationInMinutes,
          },
        },
      },
      { new: true }
    );

    // إذا لم يتم العثور على الوثيقة
    if (!UpdateLesson) {
      return new Response(JSON.stringify({ message: "Chapter not found" }), {
        status: 404,
      });
    }
    const mate = await Material.find({});
    return new Response(
      JSON.stringify({
        message: "Heloo from Date lesson route req is succ ",
        dataLessonFomApi: UpdateLesson,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        message: "Heloo from Date lesson route req is succ ",
      }),
      { status: 500 }
    );
  }
}
