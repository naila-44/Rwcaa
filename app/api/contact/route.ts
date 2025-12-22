import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/Models/mongodb";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("rwcaa");

    const result = await db.collection("contacts").insertOne(data);

    return NextResponse.json({ message: "Contact saved successfully", id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save contact data" }, { status: 500 });
  }
}
