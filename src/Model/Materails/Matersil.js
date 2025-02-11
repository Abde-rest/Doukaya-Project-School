// create Shecma
const mongoose = require("mongoose");

export const MaterialSchema = new mongoose.Schema(
  {
    // Her Your Add The Photo or img User if your need that

    _id: { type: mongoose.Schema.Types.ObjectId, required: true }, // معرف المادة (مثل "physics_1am")
    name: { type: String, required: true }, // اسم المادة (مثل "الفيزياء")
    levelId: { type: String, required: true }, // مرجع للمستوى (مثل "1am")
    chapters: [{ type: String, require: true }], // مصفوفة تحتوي على معرفات الفصول (مثل ["chapter_1", "chapter_2", "chapter_3"])
    Tolesson: { type: Number, required: true },
    nameEn: { type: String, required: true },
    LogoMat: { type: String, required: true },
  },
  { collection: "materials" }
);

export default mongoose.models.Material ||
  mongoose.model("Material", MaterialSchema);

// const Material = mongoose.model("Material", MaterialSchema);

// module.exports = Material;

// let Material;
// try {
//   Material = mongoose.model("Material");
// } catch (error) {
//   Material = mongoose.model("Material", MaterialSchema);
// }

// module.exports = Material;
