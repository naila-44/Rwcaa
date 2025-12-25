import { NextResponse } from "next/server";
import User from "../../../../Models/User";
import { dbConnect } from "../../../../lib/mongoose";

export async function GET() {
  await dbConnect();
  const adminCount = await User.countDocuments({ role: "admin" });
  return NextResponse.json({ adminExists: adminCount > 0 });
}
