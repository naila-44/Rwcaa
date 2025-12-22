import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongoose";
import Contact from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const data = await req.json();
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const contact = await Contact.create(data);

    return NextResponse.json({ message: "Contact saved successfully", data: contact }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save contact data" }, { status: 500 });
  }
}
