import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongoose";
import User from "@/Models/User";

export async function GET() {
  await dbConnect(); 

  
  const adminExists = await User.findOne({ email: "admin@gmail.com" });
  if (adminExists) {
    console.log("Admin already exists in the database.");
    return NextResponse.json({ msg: "Admin already exists" });
  }

  try {
   
    const newUser = await User.create({
      email: "admin@gmail.com",
      password: "123456", 
      role: "admin",
    });
    console.log("Admin created successfully:", newUser);
    return NextResponse.json({ msg: "Admin created successfully" });
  } catch (error) {
    console.error("Error creating admin:", error);
    return NextResponse.json({ msg: "Error creating admin" }, { status: 500 });
  }
}
