import mongoose, { Schema, Document, Model } from "mongoose";
import { Providers } from "@/lib/providers";
export interface IUser extends Document {
  uuid: string;
  role_id: number;
  role: string;
  name?: string;
  bio?: string;
  email: string;
  password_hash?: string;
  phone?: string;
  country?: string;
  city?: string;
  profession?: string;
  company?: string;
  website?: string;
  provider?: string;
  provider_id?: string;
  avatar?: string;
  status: "active" | "inactive" | "banned";
  last_login?: Date;

  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    role_id: {
      type: Number,
      required: true,
      default: 2, // Normal User
    },

    role: {
        type: String,
        required: true,
        default: "client",
    },

    name: {
      type: String,
      trim: true,
      maxlength: 255,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    //   sparse: true,
    },

    password_hash: {
      type: String,
      default: null,
      select: false,
    },

    phone: {
      type: String,
      maxlength: 50,
    },

    profession: {
      type: String,
      maxlength: 150,
    },

    provider: {
      type: String,
      enum: Object.values(Providers),
      default: Providers.CREDENTIALS,
    },

    provider_id: {
      type: String,
    },

    avatar: {
      type: String,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "banned"],
      default: "active",
    },

    last_login: {
      type: Date,
      default: null,
    },

    company: {
      type: String,
      maxlength: 255,
    },

    website: {
      type: String,
      maxlength: 255,
    },

    country: {
      type: String,
      maxlength: 100,
    },

    city: {
      type: String,
      maxlength: 100,
    },

    bio: {
      type: String,
      maxlength: 1000,
    },

  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> =
  mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);

export default User;