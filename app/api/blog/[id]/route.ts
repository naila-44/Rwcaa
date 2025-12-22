import { NextResponse } from "next/server";
import Blog from "@/Models/Blog";
import { connectDB } from "@/lib/db";

export async function GET(_: Request, props: any) {
  await connectDB();
  const post = await Blog.findById(props.params.id);
  return NextResponse.json(post);
}
