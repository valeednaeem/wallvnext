import { cookies } from "next/headers";
import { verifyToken } from "./jwt";
import { RolePermissions } from "./roles";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}

export async function hasPermission(
  role: string,
  permission: string,
) {
  const permissions =
    RolePermissions[
      role as keyof typeof RolePermissions
    ] || [];

  return permissions.includes(permission as never);
}
