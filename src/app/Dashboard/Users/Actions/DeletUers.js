"use server";
import User from "@/Model/ModelUser/ModelUser";
// import ChapterAndlesson from "@/Model/Chapter&Lesson/ModelChapter&Lesson";

import { revalidatePath } from "next/cache";
export default async function DeletUers({ id }) {
  try {
    let resulte = await User.deleteOne({
      _id: id,
    });
    console.log(resulte);

    //   { _id: idSubject }, // البحث عن المادة المطلوبة
    //   { $pull: { [chapter]: { _id: id } } }, // حذف الدرس بناءً على الـ _id
    //   { new: true } // إرجاع الوثيقة بعد التحديث
    // );
    revalidatePath("/Dashboard/courses");
    return resulte;
  } catch (error) {
    console.log(error);
  }
}
