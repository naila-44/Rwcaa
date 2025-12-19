import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const MONGODB_URI = process.env.MONGODB_URI;

declare global {
  var mongoosePromise: Promise<typeof mongoose> | undefined;
}

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB is already connected.");
    return mongoose;
  }

  console.log("Connecting to MongoDB...");
  return mongoose.connect(MONGODB_URI).catch((error) => {
    console.error("MongoDB connection error:", error);
    throw error;
  });
}
