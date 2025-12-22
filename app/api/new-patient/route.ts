import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongoose";
import { createPatient } from "@/app/api/services/api.service";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, phone, email, reason } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone and email are required" },
        { status: 400 }
      );
    }

    const patient = await createPatient({
      name,
      phone,
      email,
      reason,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        patient,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("New patient error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
