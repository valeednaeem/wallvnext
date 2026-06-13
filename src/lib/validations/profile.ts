import { z } from "zod";

export const profileSchema =
  z.object({
    name: z.string().min(2),

    phone: z.string().optional(),

    profession:
      z.string().optional(),

    company:
      z.string().optional(),

    website:
      z.string().optional(),

    country:
      z.string().optional(),

    city: z.string().optional(),

    bio: z.string().optional(),
  });

export type ProfileFormValues =
  z.infer<
    typeof profileSchema
  >;