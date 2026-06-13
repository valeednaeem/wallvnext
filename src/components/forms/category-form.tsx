"use client";

import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import * as z from "zod";

import {
  Button,
} from "@/components/ui/button";

import {
  Input,
} from "@/components/ui/input";

import {
  Textarea,
} from "@/components/ui/textarea";

const schema = z.object({
  name:
    z.string().min(2),

  slug:
    z.string().min(2),

  description:
    z.string().optional(),

  image:
    z.string().optional(),

  status:
    z.enum([
      "active",
      "inactive",
    ]),
});

type FormData =
  z.infer<typeof schema>;

export default function CategoryForm() {
  const form =
    useForm<FormData>({
      resolver:
        zodResolver(schema),

      defaultValues: {
        status:
          "active",
      },
    });

  async function onSubmit(
    values: FormData
  ) {
    const response =
      await fetch(
        "/api/categories",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify(
              values
            ),
        }
      );

    if (response.ok) {
      window.location.assign(
        "/dashboard/categories"
      );
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(
        onSubmit
      )}
      className="space-y-4"
    >
      <Input
        placeholder="Category Name"
        {...form.register(
          "name"
        )}
      />

      <Input
        placeholder="Slug"
        {...form.register(
          "slug"
        )}
      />

      <Textarea
        placeholder="Description"
        {...form.register(
          "description"
        )}
      />

      <Input
        placeholder="Image URL"
        {...form.register(
          "image"
        )}
      />

      <Button
        type="submit"
      >
        Save Category
      </Button>
    </form>
  );
}