import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest
) {
  const provider =
    req.nextUrl.searchParams.get(
      "provider"
    );

  switch (provider) {
    case "google": {
      const redirectUri = "http://localhost:3000/api/auth/callback";

      console.log("Google Redirect URI:", redirectUri);

      // return NextResponse.redirect(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=openid email profile`);

      return NextResponse.redirect(
        `https://accounts.google.com/o/oauth2/v2/auth` +
        `?client_id=${process.env.GOOGLE_CLIENT_ID}` +
        `&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback?provider=google` +
        `&response_type=code` +
        `&scope=openid email profile` +
        `&access_type=offline` +
        `&prompt=consent`
      );

    }

    case "github": {
      const redirectUri = "http://localhost:3000/api/auth/callback";

      console.log("GitHub Redirect URI:", redirectUri);

      return NextResponse.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback?provider=github`);
    }

    case "facebook":
      const redirectUri = "http://localhost:3000/api/auth/callback";

      console.log("Facebook Redirect URI:", redirectUri);

      return NextResponse.redirect(
        `https://www.facebook.com/v18.0/dialog/oauth?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback?provider=facebook`
      );

    case "linkedin":
      return NextResponse.redirect(
        `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback?provider=linkedin&scope=openid profile email`
      );

    case "Instagram":
      return NextResponse.redirect(
        `https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback?provider=instagram&response_type=code&scope=user_profile,user_media`
      );

      default:
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid provider",
        },
        {
          status: 400,
        }
      );
  }
}