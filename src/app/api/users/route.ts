import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import User from "@/models/user";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const existingUser = await User.findOne({
      email: body.email,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 409,
        }
      );
    }

    const password_hash = await bcrypt.hash(
      body.password,
      12
    );

    const user = await User.create({
      uuid: uuidv4(),
      role_id: body.role_id ?? 2,
      name: body.name,
      email: body.email,
      password_hash,
      phone: body.phone,
      profession: body.profession,
      status: "active",
    });

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create user",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const users = await User.find()
      .select("-password_hash")
      .sort({
        createdAt: -1,
      });

    return NextResponse.json({
      success: true,
      data: users,
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