
import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
    date: { type: String, required: true }, 
    time: { type: String, required: true }, 
    note: { type: String },
    createdBy: { type: String },
  },
  { timestamps: true }
);

AppointmentSchema.index({ patientId: 1, date: 1, time: 1 }, { unique: false });

export default mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);
