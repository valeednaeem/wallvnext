import {
  NextRequest,
  NextResponse,
} from "next/server";

import Product from "@/models/product";

import { connectDB } from "@/lib/mongodb";

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

  const product =
    await Product.findById(
      id
    );

  return NextResponse.json(
    product
  );
}

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

  const product =
    await Product.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

  return NextResponse.json(
    product
  );
}

export async function DELETE(
  req: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } =
    await context.params;

  await connectDB();

  await Product.findByIdAndDelete(
    id
  );

  return Response.json({
    success: true,
  });
}