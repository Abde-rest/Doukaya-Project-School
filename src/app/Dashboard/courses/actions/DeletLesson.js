"use server";
import ChapterAndlesson from "@/Model/Chapter&Lesson/ModelChapter&Lesson";
import { revalidatePath } from "next/cache";
export default async function DeletLesson({ id, idSubject, chapter }) {
  try {
    let resulte = await ChapterAndlesson.findOneAndUpdate(
      { _id: idSubject }, // البحث عن المادة المطلوبة
      { $pull: { [chapter]: { _id: id } } }, // حذف الدرس بناءً على الـ _id
      { new: true } // إرجاع الوثيقة بعد التحديث
    );
    revalidatePath("/Dashboard/courses");
  } catch (error) {
    console.log(error);
  }
}
