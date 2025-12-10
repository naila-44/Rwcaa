import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/Models/Blog";

export async function GET() {
  await connectDB();
  const posts = await Blog.find();
  return NextResponse.json(posts);
}
