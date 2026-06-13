import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import User from "@/models/user";

import { connectDB } from "@/lib/mongodb";
import { verifyToken } from "@/lib/jwt";
export async function GET() {    

  try {
    await connectDB();

    const cookieStore =
      await cookies();

    const token =
      cookieStore.get("token")
        ?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded =
      verifyToken(token);

    const user =
      await User.findById(
        decoded.id
      ).select("-password_hash");

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
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

export async function PUT(
  req: NextRequest
) {
  try {
    await connectDB();

    const cookieStore =
      await cookies();

    const token =
      cookieStore.get("token")
        ?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 401,
        }
      );
    }

    const decoded =
      verifyToken(token);

    const body =
      await req.json();

    const user =
      await User.findByIdAndUpdate(
        decoded.id,
        {
          name: body.name,
          phone: body.phone,
          profession:
            body.profession,

          company:
            body.company,

          website:
            body.website,

          country:
            body.country,

          city: body.city,

          bio: body.bio,
        },
        {
          new: true,
        }
      ).select(
        "-password_hash"
      );

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      },
    );
  }
}