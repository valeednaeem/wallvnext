"use client";

import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import * as z from "zod";

import {
  Input,
} from "@/components/ui/input";

import {
  Textarea,
} from "@/components/ui/textarea";

import {
  Button,
} from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";


const schema = z.object({
  category_id: z.string().min(1),

  title: z.string().min(3),

  slug: z.string().min(3),

  type: z.enum([
    "product",
    "service",
    "hosting",
    "domain",
  ]),

  price: z.coerce.number(),

  sale_price: z.coerce.number().optional(),

  stock: z.coerce.number(),

  sku: z.string().optional(),

  short_description:
    z.string().optional(),

  description:
    z.string().optional(),

  images:
    z.string().optional(),
});

type FormData =
  z.infer<typeof schema>;
type Category = {
  _id: string;
  title: string;
};
export default function ProductForm() {

const form = useForm({
  resolver: zodResolver(schema),

  defaultValues: {
    category_id: "",
    title: "",
    slug: "",

    type: "product",

    price: 0,
    sale_price: 0,
    stock: 0,

    sku: "",
    short_description: "",
    description: "",
    images: "",
  },
});

  async function onSubmit(
    values: FormData
  ) {
      await fetch(
      "/api/products",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify({
            ...values,

            images:
              values.images
                ? [
                    values.images,
                  ]
                : [],
          }),
      }
    );

    window.location.assign(
      "/dashboard/products"
    );
  }

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
    const loadCategories = async () => {
        const response =
        await fetch("/api/categories");

        const data =
        await response.json();

        setCategories(data);
    };

    loadCategories();
    }, []);

    return (
    <form
      onSubmit={form.handleSubmit(
        onSubmit
      )}
      className="space-y-4"
    >
    <Select
    onValueChange={(value) =>
        form.setValue(
        "category_id",
        value
        )
    }
    >
    <SelectTrigger>
        <SelectValue
        placeholder="Select Category"
        />
    </SelectTrigger>

    <SelectContent>
        {categories.map(
        (category) => (
            <SelectItem
            key={category._id}
            value={category._id}
            >
            {category.title}
            </SelectItem>
        )
        )}
    </SelectContent>
    </Select>

      <Input
        placeholder="Title"
        {...form.register(
          "title"
        )}
      />

      <Input
        placeholder="Slug"
        {...form.register(
          "slug"
        )}
      />

      <Textarea
        placeholder="Short Description"
        {...form.register(
          "short_description"
        )}
      />

      <Textarea
        placeholder="Description"
        {...form.register(
          "description"
        )}
      />

      <Input
        placeholder="Type"
        {...form.register(
          "type"
        )}
      />

      <Input
        placeholder="Price"
        type="number"
        {...form.register(
          "price"
        )}
      />

      <Input
        placeholder="Sale Price"
        type="number"
        {...form.register(
          "sale_price"
        )}
      />

      <Input
        placeholder="SKU"
        {...form.register(
          "sku"
        )}
      />

      <Input
        placeholder="Stock"
        type="number"
        {...form.register(
          "stock"
        )}
      />

      <Input
        placeholder="Image URL"
        {...form.register(
          "images"
        )}
      />

      <Button
        type="submit"
      >
        Save Product
      </Button>
    </form>
  );
}