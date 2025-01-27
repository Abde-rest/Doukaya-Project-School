// create Shecma
const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema(
  {
    // Her Your Add The Photo or img User if your need that

    _id: { type: String, required: true },
    name: { type: String, required: true },
    materials: [{ type: mongoose.Schema.Types.ObjectId, ref: "Material" }],
  },
  { collection: "levels" } // تحديد اسم المجموعة هنا
);

// module.exports = mongoose.model('Level', LevelSchema);
// const Level = mongoose.model("Level", LevelSchema);

// module.exports = Level;

let Level;
try {
  Level = mongoose.model("Level");
} catch (error) {
  Level = mongoose.model("Level", LevelSchema);
}

module.exports = Level;
