import mongoose, { Schema, models } from "mongoose";

const ResourceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true, 
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      index: true, 
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
  },
  {
    timestamps: true, 
  }
);


ResourceSchema.index({ createdAt: -1 });

const Resource =
  models.Resource || mongoose.model("Resource", ResourceSchema);

export default Resource;
