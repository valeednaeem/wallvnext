import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  verifyToken,
} from "@/lib/jwt";

import { getCurrentUser } from "@/lib/auth";
import { hasPermission } from "@/lib/auth";
import { Roles } from "@/lib/roles";
import { connectDB } from "@/lib/mongodb";

export default async function proxy(
  req: NextRequest
) {
  await connectDB();
  const token = req.cookies.get("token")?.value;

  const pathname = req.nextUrl.pathname;
  const isProtected = pathname.startsWith("/dashboard");

  const user = await getCurrentUser();
  const userRole = user ? (user.role as keyof typeof Roles) : null;
  const hasDashboardAccess = user    ? await hasPermission(
        user.role,
        "dashboard_access"
      )
    : false;

  if (!isProtected || (userRole && hasDashboardAccess)) {
    return NextResponse.next();
  }
  if (!token || !user) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }
  try {
    const decoded = verifyToken(token);
    const email =
      typeof decoded === "string"
        ? undefined
        : decoded.email;
    console.log(
      "Authenticated:",
      email ?? "unknown"
    );
    const authPages = [
      "/login",
      "/signup",
    ];
    if ( token && authPages.includes(pathname) ) {
      return NextResponse.redirect( new URL( "/dashboard", req.url ) );
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};


// export default function proxy(
//   req: NextRequest
// ) {
//   const token =
//     req.cookies.get("token")
//       ?.value;

//   const pathname =
//     req.nextUrl.pathname;

//   const isProtected =
//     pathname.startsWith(
//       "/dashboard"
//     );

//   if (!isProtected) {
//     return NextResponse.next();
//   }

//   if (!token) {
//     return NextResponse.redirect(
//       new URL(
//         "/login",
//         req.url
//       )
//     );
//   }

//   try {
//     const decoded =
//       verifyToken(token);

//     const email =
//       typeof decoded === "string"
//         ? undefined
//         : decoded.email;

//     console.log(
//       "Authenticated:",
//       email ?? "unknown"
//     );

//     return NextResponse.next();
//   } catch {
//     return NextResponse.redirect(
//       new URL(
//         "/login",
//         req.url
//       )
//     );
//   }
// }