import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongoose"; 
import User from "@/Models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    await dbConnect();

   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "User registered successfully", userId: user._id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
