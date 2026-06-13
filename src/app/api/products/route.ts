import {
  NextRequest,
  NextResponse,
} from "next/server";

import Product from "@/models/product";

import { connectDB } from "@/lib/mongodb";

export async function GET() {
  await connectDB();

    const products =
    await Product.find()
        .populate(
        "category_id",
        "title slug"
        )
        .sort({
        createdAt: -1,
        });

    return NextResponse.json(
    products
    );
}

export async function POST(
  req: NextRequest
) {
  try {
    await connectDB();

    const body =
      await req.json();

    const product =
      await Product.create(
        body
      );

    return NextResponse.json(
      product,
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Unable to create product",
      },
      {
        status: 500,
      }
    );
  }
}