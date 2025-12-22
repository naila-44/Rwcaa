import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongoose";
import Blog from "@/models/Blog";

export async function GET() {
  await dbConnect();
  const posts = await Blog.find();
  return NextResponse.json(posts);
}
