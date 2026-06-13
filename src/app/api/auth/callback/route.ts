import {
  NextRequest,
  NextResponse,
} from "next/server";

import User from "@/models/user";

import { connectDB } from "@/lib/mongodb";

import { signToken } from "@/lib/jwt";

import { Providers } from "@/lib/providers";

type OAuthProfile = {
  email: string;
  name: string;
  avatar?: string;
  provider_id: string;
};

export async function GET(
  req: NextRequest
) {
  try {
    const code =
      req.nextUrl.searchParams.get(
        "code"
      );

    const provider =
      (
        req.nextUrl.searchParams.get(
          "provider"
        ) || "credentials"
      ) as Providers;

    if (!code) {
      return NextResponse.redirect(
        new URL(
          "/login",
          req.url
        )
      );
    }

    await connectDB();

    let profile: OAuthProfile;


console.log("=== CALLBACK START ===");

console.log(
  "URL:",
  req.nextUrl.toString()
);

console.log(
  "Code:",
  req.nextUrl.searchParams.get("code")
);

console.log(
  "Provider:",
  req.nextUrl.searchParams.get("provider")
);


    switch (provider) {
      case Providers.GOOGLE: {

        const tokenResponse =
          await fetch(
            "https://oauth2.googleapis.com/token",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded",
              },
              body:
                new URLSearchParams({
                  code,
                  client_id:
                    process.env
                      .GOOGLE_CLIENT_ID!,
                  client_secret:
                    process.env
                      .GOOGLE_CLIENT_SECRET!,
                  redirect_uri:
                    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback?provider=google`,
                  grant_type:
                    "authorization_code",
                }),
            }
          );

        const tokenData =
          await tokenResponse.json();

          console.log("Google Token Data:", tokenData);

          const profileResponse =
          await fetch(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization:
                  `Bearer ${tokenData.access_token}`,
              },
            }
          );

        const googleProfile =
          await profileResponse.json();

        profile = {
          email:
            googleProfile.email,
          name:
            googleProfile.name,
          avatar:
            googleProfile.picture,
          provider_id:
            googleProfile.sub,
        };

        break;
      }

      case Providers.GITHUB: {
        const tokenResponse =
          await fetch(
            "https://github.com/login/oauth/access_token",
            {
              method: "POST",
              headers: {
                Accept:
                  "application/json",
              },
              body:
                new URLSearchParams({
                  client_id:
                    process.env.GITHUB_CLIENT_ID!,
                  client_secret:
                    process.env.GITHUB_CLIENT_SECRET!,
                  code,
                }),
            }
          );

        const tokenData =
          await tokenResponse.json();

        const userResponse =
          await fetch(
            "https://api.github.com/user",
            {
              headers: {
                Authorization:
                  `Bearer ${tokenData.access_token}`,
              },
            }
          );

        const githubUser =
          await userResponse.json();

        const emailResponse =
          await fetch(
            "https://api.github.com/user/emails",
            {
              headers: {
                Authorization:
                  `Bearer ${tokenData.access_token}`,
              },
            }
          );

        const emails =
          await emailResponse.json();

        console.log(
          "GitHub Emails:",
          emails);

        const primaryEmail =
          emails.find(
            (e: any) =>
              e.primary
          )?.email;

        profile = {
          email:
            primaryEmail,
          name:
            githubUser.name ||
            githubUser.login,
          avatar:
            githubUser.avatar_url,
          provider_id:
            githubUser.id.toString(),
        };

        break;
      }

      case Providers.FACEBOOK: {

        const tokenResponse =
          await fetch(
            `https://graph.facebook.com/v19.0/oauth/access_token?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback?provider=facebook&client_secret=${process.env.FACEBOOK_CLIENT_SECRET}&code=${code}`
          );

        const tokenData =
          await tokenResponse.json();

        const userResponse =
          await fetch(
            `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${tokenData.access_token}`
          );

        const fbUser =
          await userResponse.json();

        profile = {
          email:
            fbUser.email,
          name:
            fbUser.name,
          avatar:
            fbUser.picture?.data?.url,
          provider_id:
            fbUser.id,
        };

        break;
      }

      case Providers.LINKEDIN: {

        const tokenResponse =
          await fetch(
            "https://www.linkedin.com/oauth/v2/accessToken",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded",
              },
              body:
                new URLSearchParams({
                  grant_type:
                    "authorization_code",
                  code,
                  redirect_uri:
                    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`,
                  client_id:
                    process.env.LINKEDIN_CLIENT_ID!,
                  client_secret:
                    process.env.LINKEDIN_CLIENT_SECRET!,
                }),
            }
          );

        const tokenData =
          await tokenResponse.json();

        const profileResponse =
          await fetch(
            "https://api.linkedin.com/v2/userinfo",
            {
              headers: {
                Authorization:
                  `Bearer ${tokenData.access_token}`,
              },
            }
          );

        const linkedinProfile =
          await profileResponse.json();

        profile = {
          email:
            linkedinProfile.email,
          name:
            linkedinProfile.name,
          avatar:
            linkedinProfile.picture,
          provider_id:
            linkedinProfile.sub,
        };

        break;
      }

      case Providers.INSTAGRAM: {

        const tokenResponse =
          await fetch(
            "https://api.instagram.com/oauth/access_token",
            {
              method: "POST",
              body:
                new URLSearchParams({
                  client_id:
                    process.env.INSTAGRAM_CLIENT_ID!,
                  client_secret:
                    process.env.INSTAGRAM_CLIENT_SECRET!,
                  grant_type:
                    "authorization_code",
                  redirect_uri:
                    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`,
                  code,
                }),
            }
          );

        const tokenData =
          await tokenResponse.json();

        profile = {
          email: "",
          name:
            tokenData.user?.username,
          avatar: "",
          provider_id:
            tokenData.user_id,
        };

        break;
      }

      default:
        return NextResponse.redirect(
          new URL(
            "/login",
            req.url
          )
        );
    }

    let user =
      await User.findOne({
        email:
          profile.email,
      });

    if (!user) {
      user =
        await User.create({
          uuid:
            crypto.randomUUID(),

          role_id: 2,

          role: "client",

          email:
            profile.email,

          name:
            profile.name,

          avatar:
            profile.avatar,

          provider,

          provider_id:
            profile.provider_id,

          status:
            "active",
        });
    }

    user.name =
      profile.name;

    user.email =
      profile.email;

    user.avatar =
      profile.avatar;

    user.provider =
      provider;

    user.provider_id =
      profile.provider_id;

    user.last_login =
      new Date();

    await user.save();

    const token =
      signToken({
        id:
          user._id.toString(),

        uuid:
          user.uuid,

        role:
          user.role,

        email:
          user.email!,
      });

    const response =
      NextResponse.redirect(
        new URL(
          "/dashboard",
          req.url
        )
      );

    response.cookies.set(
      "token",
      token,
      {
        httpOnly: true,

        secure:
          process.env.NODE_ENV ===
          "production",

        sameSite: "lax",

        path: "/",

        maxAge:
          60 *
          60 *
          24 *
          7,
      }
    );

    return response;
  } catch (error) {
    console.error(
      "OAuth Error:",
      error
    );

    return NextResponse.redirect(
      new URL(
        "/login",
        req.url
      )
    );
  }
}