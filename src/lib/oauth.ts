import User from "@/models/user";
import SocialAccount from "@/models/socialAccount";
import { connectDB } from "@/lib/mongodb";

type OAuthUser = {
  provider: string;
  provider_id: string;
  email: string;
  name: string;
  avatar?: string;
};

export async function findOrCreateUser(
  data: OAuthUser
) {
  await connectDB();

    const social =
    await SocialAccount
      .findOne({
        provider: data.provider,
        provider_id: data.provider_id,
      })
      .populate("user_id");

  if (social) {
    return social.user_id;
  }

    let user =
    await User.findOne({
      email: data.email,
    });

    if (!user) {
    user =
      await User.create({
        uuid:
          crypto.randomUUID(),

        role_id: 2,

        role: "client",

        email:
          data.email,

        name:
          data.name,

        avatar:
          data.avatar,

        status:
          "active",
      });
  }

  await SocialAccount.create({
    user_id:
      user._id,

    provider:
      data.provider,

    provider_id:
      data.provider_id,

    email:
      data.email,

    avatar:
      data.avatar,
  });

  return user;
}