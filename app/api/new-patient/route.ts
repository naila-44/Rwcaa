import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(MONGODB_URI);
}


const patientSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  reason: String,
});

// Avoid *OverwriteModelError*
const Patient =
  mongoose.models.Patient || mongoose.model("Patient", patientSchema);

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body.name || !body.phone || !body.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await Patient.create(body);

    return NextResponse.json(
      { success: true, message: "Form submitted!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
