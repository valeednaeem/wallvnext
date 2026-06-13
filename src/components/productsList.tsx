import type { ReactNode } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductPrice {
  regular: number;
  sale?: number;
  currency: string;
}

interface Product {
  name: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
  description: string;
  Price: ProductPrice;
  badge?: {
    text: string;
    color?: string;
  };
}

type ProductCardProps = Product;

type ProductList = Array<Product>;

const PRODUCTS_LIST: ProductList = [
  {
    name: "Vexon CoreStep '08 LX",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/joshua-diaz-ETNoDLl8yFE-unsplash-1.jpg",
      alt: "",
    },
    link: "#",
    description:
      "Everyday comfort meets bold tri-color style in this performance-driven design.",
    Price: {
      regular: 499.0,
      sale: 399.0,
      currency: "USD",
    },
    badge: {
      text: "Selling fast!",
      color: "oklch(57.7% 0.245 27.325)",
    },
  },
  {
    name: "Urban Chill Jacket",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/pexels-cottonbro-6764040-2.jpg",
      alt: "",
    },
    link: "#",
    description:
      "A denim puffer with tonal blues, perfect for layering across seasons.",
    Price: {
      regular: 180.0,
      currency: "USD",
    },
  },
  {
    name: "Maison Liora Bag",
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Woman-with-Tote-Bag-1.png",
      alt: "",
    },
    link: "#",
    description:
      "A refined bag that easily switches from shoulder to crossbody or top-handle.",
    Price: {
      regular: 420.0,
      currency: "USD",
    },
    badge: {
      text: "New",
    },
  },
];

interface ProductList1Props {
  className?: string;
}

const ProductList1 = ({ className }: ProductList1Props) => {
  return (
    <section className={cn("py-12 px-6", className)}>
      <div className="container">
        <div className="grid place-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS_LIST.map((item, index) => (
            <ProductCard key={`product-list-1-card-${index}`} {...item} />
          ))}
        </div>
      </div>
      <div className="container mt-12 text-right">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >More</a>
      </div>
    </section>
  );
};

const ProductCard = ({
  name,
  description,
  link,
  image,
  badge,
  Price,
}: ProductCardProps) => {
  const { regular, sale, currency } = Price;

  return (
    <a
      href={link}
      className="block h-full w-full max-w-md transition-opacity hover:opacity-80"
    >
      <Card className="h-full overflow-hidden p-0">
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              className="block size-full object-cover object-center"
              width={400}
              height={315}
            />
          </AspectRatio>
          {badge && (
            <Badge
              style={{
                backgroundColor: badge.color,
              }}
              className="absolute start-4 top-4"
            >
              {badge.text}
            </Badge>
          )}
        </CardHeader>
        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <CardTitle className="text-xl font-semibold">{name}</CardTitle>
          <CardDescription className="font-medium text-muted-foreground">
            {description}
          </CardDescription>
          <div className="mt-auto text-lg font-semibold">
            {sale ? (
              <>
                <span className="text-red-500">{currency} {sale.toFixed(2)}</span>
                <span className="line-through ml-2">{currency} {regular.toFixed(2)}</span>
              </>
            ) : (
              <span>{currency} {regular.toFixed(2)}</span>
            )}
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export { ProductList1 };
