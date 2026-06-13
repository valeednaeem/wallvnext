import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

export interface ISocialAccount
  extends Document {

  user_id:
    mongoose.Types.ObjectId;

  provider:
    string;

  provider_id:
    string;

  email?: string;

  avatar?: string;
}

const SocialAccountSchema =
  new Schema(
    {
      user_id: {
        type:
          Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      provider: {
        type: String,
        required: true,
      },

      provider_id: {
        type: String,
        required: true,
      },

      email: String,

      avatar: String,
    },
    {
      timestamps: true,
    }
  );

export default
  (mongoose.models.SocialAccount ||
    mongoose.model(
      "SocialAccount",
      SocialAccountSchema
    )) as Model<ISocialAccount>;