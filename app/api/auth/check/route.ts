import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "devsecret";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value; // same cookie name as login
    if (!token) {
      console.log("No token found. User is not authenticated.");
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Verify the token
    const payload = jwt.verify(token, JWT_SECRET);
    console.log("Token verified. User authenticated:", payload);
    return NextResponse.json({ authenticated: true, user: payload });
  } catch (err) {
    console.error("Error verifying token:", err);
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}

