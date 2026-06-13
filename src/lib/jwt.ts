import jwt, { Secret, SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as Secret;

export interface JwtPayload {
  id: string;
  uuid: string;
  name?:string;
  avatar?:string;  email: string;
  role: string;
}

export function signToken(
  payload: JwtPayload
): string {
  const options: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  };

  return jwt.sign(
    payload,
    JWT_SECRET,
    options
  );
}

export function verifyToken(
  token: string
) {
  return jwt.verify(
    token,
    JWT_SECRET
  ) as JwtPayload;
}