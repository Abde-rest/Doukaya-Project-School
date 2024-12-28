// create Shecma
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Her Your Add The Photo or img User if your need that

  email: {
    type: mongoose.Schema.Types.Mixed, // هنا نستخدم Mixed للسماح بأي نوع من البيانات
    required: true,
  },
  password: {
    type: mongoose.Schema.Types.Mixed, // هنا نستخدم Mixed للسماح بأي نوع من البيانات
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

// export default mongoose.models.User || mongoose.model("User", userSchema);
let User;
try {
  User = mongoose.model("User");
} catch (error) {
  User = mongoose.model("User", userSchema);
}

module.exports = User;
