// create Shecma
const mongoose = require("mongoose");

// تعريف الدرس كـ Sub-Schema
const lessonSchema = new mongoose.Schema({
  title: {
    type: String, // اسم الدرس
    required: true,
  },
  description: {
    type: String, // وصف الدرس
    default: "لايوجد وصف",
  },
  completed: {
    type: Boolean, // هل الدرس تم دراسته أم لا
    default: false,
  },
  time: { type: Date, default: Date.now() },
  // رابط الدرس الموجود في cloud
  linkVedio: {
    type: String, // اسم الدرس
    required: true,
  },
});

export const ChapterSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true }, // معرف id الخاص ب chapter and lesson
    nameEn: { type: String, required: true }, // اسم المادة المرتبطة المرتبطة  بها الدروس

    // النوع يكون array
    // يجب علي نزع required لانه عند اضافة مستد جديد او تجديث مستند مثل اضافة درس معين في chapter 1 or 2 or 3
    // اي انه يفرض عليا اضافة جميع الحقول وهاذا مستحيل مرة واحدة
    chapter_1: [{ type: lessonSchema }],
    chapter_2: [{ type: lessonSchema }],
    chapter_3: [{ type: lessonSchema }],
    // Tolesson: { type: Number, required: true },
    level_id: { type: String, required: true }, // اسم السمة المرتبطة بالدروس
  },
  { collection: "chapters" }
);

export default mongoose.models.ChapterAndlesson ||
  mongoose.model("ChapterAndlesson", ChapterSchema);
