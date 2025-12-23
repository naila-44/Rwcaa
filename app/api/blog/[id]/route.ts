import { NextResponse } from "next/server";
import Blog from "../../../../Models/Blog"; 
import { dbConnect } from "@/lib/mongoose";

export async function GET(_: Request, props: any) {
  await dbConnect();
  const post = await Blog.findById(props.params.id);
  return NextResponse.json(post);
}
