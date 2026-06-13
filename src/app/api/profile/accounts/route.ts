import {
  NextRequest,
  NextResponse,
} from "next/server";

import jwt from "jsonwebtoken";

import SocialAccount
from "@/models/socialAccount";

import { connectDB }
from "@/lib/mongodb";

export async function GET(
  req:NextRequest
){

  await connectDB();

  const token =
    req.cookies.get(
      "token"
    )?.value;

  if(!token){
    return NextResponse.json(
      {
        success:false
      },
      {
        status:401
      }
    );
  }

  const decoded:any=
    jwt.verify(
      token,
      process.env.JWT_SECRET!
    );

  const accounts =
    await SocialAccount.find({
      user_id:
        decoded.id,
    });

  return NextResponse.json({
    success:true,
    accounts,
  });
}