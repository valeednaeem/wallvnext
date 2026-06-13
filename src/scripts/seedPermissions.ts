import mongoose from "mongoose";
import Permission from "@/models/permissions";
import { Permissions } from "@/lib/permissions";

async function seedPermissions() {
  await mongoose.connect(
    process.env.MONGODB_URI!
  );

  for (const permission of Object.values(
    Permissions
  )) {
    await Permission.updateOne(
      { name: permission },
      { name: permission },
      { upsert: true }
    );
  }

  console.log("Permissions Seeded");

  process.exit(0);
}

seedPermissions().catch(console.error);