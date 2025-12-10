import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/Models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) return NextResponse.json({ error: "User not found" });

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) return NextResponse.json({ error: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  return NextResponse.json({ token });
}
