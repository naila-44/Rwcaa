import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongoose"; 
import Resource from "@/Models/Resource";  

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();

   
    if (!body.title || !body.description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    // ✅ Create resource using Mongoose model
    const resource = await Resource.create({
      title: body.title,
      description: body.description,
      category: body.category,
      createdBy: body.createdBy,
    });

    return NextResponse.json(
      { success: true, message: "Resource saved successfully", data: resource },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /resources error:", error);
    return NextResponse.json(
      { error: "Failed to save resource data" },
      { status: 500 }
    );
  }
}
