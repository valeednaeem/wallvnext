import mongoose from "mongoose";
import Role from "@/models/role";
import { Roles, RolePermissions } from "@/lib/roles";

async function seedRoles() {
  await mongoose.connect(process.env.MONGODB_URI!);

  for (const role of Object.values(Roles)) {
    await Role.updateOne(
      { name: role },
      {
        name: role,
        permissions:
          RolePermissions[
            role as keyof typeof RolePermissions
          ] || [],
      },
      { upsert: true }
    );
  }

  console.log("Roles Seeded");

  process.exit(0);
}

seedRoles().catch(console.error);