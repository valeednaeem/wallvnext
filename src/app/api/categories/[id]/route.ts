import {
  NextRequest,
  NextResponse,
} from "next/server";

import ProductCategory from "@/models/productCategory";

import { connectDB } from "@/lib/mongodb";


// GET ONE

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  await connectDB();

  const { id } =
    await params;

  const category =
    await ProductCategory.findById(
      id
    );

  if (!category) {
    return NextResponse.json(
      {
        message:
          "Category not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    category
  );
}


// UPDATE

export async function PUT(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  await connectDB();

  const { id } =
    await params;

  const body =
    await req.json();

  const category =
    await ProductCategory.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

  return NextResponse.json(
    category
  );
}


// DELETE

export async function DELETE(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  await connectDB();

  const { id } =
    await params;

  await ProductCategory.findByIdAndDelete(
    id
  );

  return NextResponse.json({
    success: true,
  });
}