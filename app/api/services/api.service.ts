import Patient from "../../../Models/patient";
import Appointment from "../../../Models/appointment";


export async function createPatient(data: any) {
  return Patient.create(data);
}

export async function getPatients(query: any, page: number, limit: number) {
  const total = await Patient.countDocuments(query);

  const patients = await Patient.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  return { patients, total };
}


export async function createAppointment(data: any) {
  return Appointment.create(data);
}

export async function getAppointments(query: any) {
  return Appointment.find(query)
    .sort({ date: 1, time: 1 })
    .lean();
}
