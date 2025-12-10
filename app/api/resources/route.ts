import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/Models/mongodb";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // { title, description, fileUrl }
    const client = await clientPromise;
    const db = client.db("rwcaa");

    const result = await db.collection("resources").insertOne(data);

    return NextResponse.json({ message: "Resource saved successfully", id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save resource data" }, { status: 500 });
  }
}
