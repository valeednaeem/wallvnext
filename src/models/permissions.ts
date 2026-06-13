import mongoose, { Schema } from "mongoose";

const PermissionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default
  mongoose.models.Permission ||
  mongoose.model(
    "Permission",
    PermissionSchema
  );