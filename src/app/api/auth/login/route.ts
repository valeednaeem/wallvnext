import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { signToken } from "@/lib/jwt"
import User from "@/models/user";
import { connectDB } from "@/lib/mongodb";



export async function POST(req: Request) {

  await connectDB();
  const body = await req.json()

  // const email = body.email
  // const password = body.password

  // // find user from DB here

  // const user = {
  //   id: "123",
  //   email,
  //   role: "admin",
  //   passwordHash: await bcrypt.hash("123456", 10),
  // }

  const user = await User.findOne({
    email: body.email.toLowerCase(),
  }).select("+password_hash");

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "User not found",
      },
      {
        status: 401,
      }
    );
  }

  const valid =
    await bcrypt.compare(
      body.password,
      user.password_hash?.toString() || ""
    );

  if (!valid) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid credentials",
      },
      {
        status: 401,
      }
    );
  }

  user.last_login = new Date();

  await user.save();

  const token = signToken({
    id: user._id.toString(),
    uuid: user.uuid,
    role: user.role,
    email: user.email,
  });

  const response =
    NextResponse.json({
      success: true,
    });

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
      maxAge: process.env.JWT_EXPIRES_IN
        ? parseInt(
            process.env.JWT_EXPIRES_IN.replace("d", "") ) * 24 * 60 * 60
        : 7 * 24 * 60 * 60, // default to 7 days
    }
  );

  return response;
}