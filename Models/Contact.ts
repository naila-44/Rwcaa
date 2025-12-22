
import mongoose, { Schema, models } from "mongoose";

const ContactSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
  },
  { timestamps: true }
);

export default (models.Contact as mongoose.Model<any>) || mongoose.model("Contact", ContactSchema);
