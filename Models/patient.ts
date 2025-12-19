import mongoose, { Schema, models } from "mongoose";

const PatientSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    disease: { type: String, trim: true },
    query: String,
    adminComments: [
      {
        text: String,
        author: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);


PatientSchema.index({ name: 1 });
PatientSchema.index({ disease: 1 });
PatientSchema.index({ name: "text", disease: "text" });


const Patient = models.Patient || mongoose.model("Patient", PatientSchema);
export default Patient;
