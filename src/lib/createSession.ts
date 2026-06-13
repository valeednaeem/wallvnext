import {
  NextRequest,
  NextResponse,
} from "next/server";

import { signToken }
from "@/lib/jwt";

export function createSession(
  req: NextRequest,
  user: any
) {

  const token =
    signToken({
      id:
        user._id.toString(),

      uuid:
        user.uuid,

      role:
        user.role,

      email:
        user.email,

      name:
        user.name,

      avatar:
        user.avatar,
    });

  const response =
    NextResponse.redirect(
      new URL(
        "/dashboard",
        req.url
      )
    );

  response.cookies.set(
    "token",
    token,
    {
      httpOnly: true,

      secure:
        process.env.NODE_ENV ===
        "production",

      sameSite: "lax",

      path: "/",

      maxAge:
        60 * 60 * 24 * 7,
    }
  );

  return response;
}