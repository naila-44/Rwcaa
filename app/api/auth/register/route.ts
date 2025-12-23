
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "../../../../lib/mongoose";
import User from "../../../../Models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password)
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });

    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return NextResponse.json({ message: "User already exists" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered successfully", user });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
