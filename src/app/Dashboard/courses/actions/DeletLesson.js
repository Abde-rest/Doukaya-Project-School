"use server";
import ChapterAndlesson from "@/Model/Chapter&Lesson/ModelChapter&Lesson";
import { revalidatePath } from "next/cache";
export default async function DeletLesson({ id, idSubject, chapter }) {
  try {
    await ChapterAndlesson.findOneAndUpdate(
      { _id: idSubject }, // البحث عن المادة المطلوبة
      { $pull: { [chapter]: { _id: id } } } // حذف الدرس بناءً على الـ _id
    );
    revalidatePath("/Dashboard/courses");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
