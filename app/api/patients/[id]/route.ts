
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongoose";
import Patient from "@/models/patient";
import mongoose from "mongoose";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const id = params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const body = await req.json();
  
  if (body.comment) {
    const patient = await Patient.findById(id);
    if (!patient) return NextResponse.json({ error: "Not found" }, { status: 404 });
    patient.adminComments.push({ text: body.comment, author: body.author || "admin" });
    await patient.save();
    return NextResponse.json(patient);
  } else {
 
    const updated = await Patient.findByIdAndUpdate(id, body, { new: true });
    if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(updated);
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const id = params.id;
  await Patient.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
