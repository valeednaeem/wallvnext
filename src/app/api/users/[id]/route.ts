import { NextRequest, NextResponse } from "next/server";

import User from "@/models/user";
import { connectDB } from "@/lib/mongodb";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await params;

  const user = await User.findById(id).select(
    "password_hash"
  );

  if (!user) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    success: true,
    data: user,
  });
}


export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await params;

  const body = await req.json();

  const user = await User.findByIdAndUpdate(
    id,
    body,
    {
      new: true,
    }
  ).select("-password_hash");

  return NextResponse.json({
    success: true,
    data: user,
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await params;

  await User.findByIdAndDelete(id);

  return NextResponse.json({
    success: true,
  });
}