import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import User from "@/models/user";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const existing = await User.findOne({
      email: body.email.toLowerCase(),
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 409 }
      );
    }

    const password_hash = await bcrypt.hash(
      body.password,
      12
    );

    const user = await User.create({
      uuid: crypto.randomUUID(),

      role: "client",

      name: body.name,

      email: body.email.toLowerCase(),

      password_hash,

      provider: "credentials",

      status: "active",
    });

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}