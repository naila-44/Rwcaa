import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../../../Models/User";
import { dbConnect } from "../../../../lib/mongoose";

export async function POST(req: Request) {
  await dbConnect();
  const { name, email, password, adminSecret } = await req.json();

  if (!name || !email || !password || !adminSecret) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  if (adminSecret !== process.env.ADMIN_REGISTER_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const adminCount = await User.countDocuments({ role: "admin" });
  if (adminCount > 0) {
    return NextResponse.json({ message: "Admin registration disabled" }, { status: 403 });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: "Admin already exists" }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "admin",
  });

  const token = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET!, { expiresIn: "7d" });

  return NextResponse.json({ message: "Admin registered successfully", token }, { status: 201 });
}
