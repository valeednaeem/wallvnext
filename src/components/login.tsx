"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
interface Login2Props {
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
    className?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
  className?: string;
}
export const loginSchema =
  z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

export type LoginFormValues =
  z.infer<typeof loginSchema>;

const onSubmit = async (data: LoginFormValues) => {
  try {
    const response = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result =
      await response.json();

    if (!response.ok) {
      throw new Error(
        result.message
      );
    }

    window.location.href =
      "/dashboard";
  } catch (error) {
    console.error(error);
  }
};

type Provider = {
  name: string;
  img: string;
  text: string;
  variant: "outline" | "link" | "default" | "secondary" | "ghost" | "destructive";
  href: string;
};

const providers: Provider[] = [
  {
    name: "Google",
    img: "/public/google.svg",
    text: "Google",
    variant: "outline",
    href: "/api/auth/social?provider=google",
  },
  {
    name: "GitHub",
    img: "/public/github.svg",
    text: "GitHub",
    variant: "outline",
    href: "/api/auth/social?provider=github",
  },
  {
    name: "Facebook",
    img: "/public/facebook.svg",
    text: "Facebook",
    variant: "outline",
    href: "/api/auth/social?provider=facebook",
  },
  {
    name: "LinkedIn",
    img: "/public/linkedin.svg",
    text: "LinkedIn",
    variant: "outline",
    href: "/api/auth/social?provider=linkedin",
  },
  {
    name: "Instagram",
    img: "/public/instagram.svg",
    text: "Instagram",
    variant: "outline",
    href: "/api/auth/social?provider=instagram",
  }
];

const Login2 = ({
  heading = "Login",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  buttonText = "Login",
  signupText = "Need an account?",
  signupUrl = "/signup",
  className,
}: Login2Props) => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <section className={cn("h-screen bg-muted px-6", className)}>
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          {/* Logo */}
          <a href={logo.url} title={logo.title}>
            <Image
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="h-10 dark:invert"
              width={180}
              height={80}
            />
          </a>
          <form className="flex w-full lg:min-w-sm flex-col items-center gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md" onSubmit={form.handleSubmit(onSubmit)}>
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
            <div className="flex w-full flex-col gap-2">
              <Label>Email</Label>
              <Input
                type="email"
                {...form.register("email")}
                placeholder="Email"
                className="text-sm"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label>Password</Label>
              <Input
                type="password"
                {...form.register("password")}
                placeholder="Password"
                className="text-sm"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {buttonText}
            </Button>
          </form>
          {/* divider */}
          <span className="text-sm text-muted-foreground">or</span>
          <div className="flex flex-row gap-2 mt-4">
            {providers.map((provider) => (
              <Button
                key={provider.name}
                variant={provider.variant}
                asChild
              >
                <a href={provider.href}>
                  <Image src={provider.img} alt={provider.name} width={20} height={20} />
                  {provider.text}
                </a>
              </Button>
            ))}
          </div>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <a
              href={signupUrl}
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login2 };
