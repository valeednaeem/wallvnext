import {
  NextRequest,
  NextResponse,
} from "next/server";

import ProductCategory from "@/models/productCategory";

import { connectDB } from "@/lib/mongodb";


// GET ALL

export async function GET() {
  await connectDB();

  const categories =
    await ProductCategory.find()
      .sort({
        createdAt: -1,
      });

  return NextResponse.json(
    categories
  );
}


// CREATE

export async function POST(
  req: NextRequest
) {
  try {
    await connectDB();

    const body =
      await req.json();

    const category =
      await ProductCategory.create(
        body
      );

    return NextResponse.json(
      category,
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Unable to create category",
      },
      {
        status: 500,
      }
    );
  }
}