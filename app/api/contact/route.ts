import { NextResponse } from "next/server";
import Contact from "@/Models/Contact";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const saved = await Contact.create(body);
  return NextResponse.json(saved);
}
