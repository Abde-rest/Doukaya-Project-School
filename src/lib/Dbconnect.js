import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; // استبدل myDatabase باسم قاعدة البيانات الخاصة بك

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      console.log("MongoDB Connected!");
      return mongoose;
    });

    console.log("Connect Datebase ");
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
