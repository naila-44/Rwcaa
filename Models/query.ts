
import { Schema, model, models } from "mongoose";

const querySchema = new Schema({
  patientName: { type: String, required: true, index: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Query = models.Query || model("Query", querySchema);
export default Query;
