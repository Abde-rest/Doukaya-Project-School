import dbConnect from "@/lib/Dbconnect";
import ChapterAndlesson from "@/Model/Chapter&Lesson/ModelChapter&Lesson";
export async function POST(req) {
  try {
    // بما أنك تستخدم API Routes في Next.js،
    //  فإن req.body لن يحتوي على البيانات المرسلة بتنسيق FormData
    //  تلقائيًا. تحتاج إلى استخدام مكتبة مثل formidable أو multer لمعالجة البيانات.

    // لا يمكن استقبال FormData مباشرة في API Route باستخدام req.json() لأن App Router في Next.js لا يعالج البيانات بصيغة multipart/form-data تلقائيًا.
    let DateLesson = await req.json();
    console.log(DateLesson);
    // {
    //   nameLesson: 'kkkkkkkkkkkkkkk',
    //   YeraLesson: '1am',
    //   ChapterLesson: 'chapter_1',
    //   MaterialLesson: 'physics',
    //   DescriptionLesson: null,
    //   VedioLesson: 'https://res.cloudinary.com/dkfhcfk3j/video/upload/v1738626867/lnpdxswwbuu2y663twvv.mp4',
    //   ExerciceLesson: null
    // }
    await dbConnect();
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
