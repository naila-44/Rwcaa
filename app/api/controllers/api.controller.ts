import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongoose";
import {
  createPatient,
  getPatients,
  createAppointment,
  getAppointments,
} from "@/app/api/services/api.service";



export async function createPatientCtrl(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const patient = await createPatient(body);
    return NextResponse.json(patient, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function getPatientsCtrl(req: Request) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page") || 1);
    const limit = Number(url.searchParams.get("limit") || 10);
    const search = url.searchParams.get("search") || "";

    const query = search ? { $text: { $search: search } } : {};

    const patients = await getPatients(query, page, limit);
    return NextResponse.json(patients);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}



export async function createAppointmentCtrl(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const appointment = await createAppointment(body);
    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function getAppointmentsCtrl(req: Request) {
  try {
    await dbConnect();

    const url = new URL(req.url);
    const upcoming = url.searchParams.get("upcoming");

    const query: any = {};
    if (upcoming === "true") {
      query.date = { $gte: new Date() };
    }

    const appointments = await getAppointments(query);
    return NextResponse.json(appointments);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
