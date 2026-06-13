"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Providers } from "@/lib/providers";
interface Signup2Props {
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
  className?: string;
}
export const signupSchema =
  z
    .object({
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });

export type RegisterFormValues = z.infer<typeof signupSchema>;

const onSubmit = async (data: RegisterFormValues) => {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    window.location.href = "/login";
  } catch (error) {
    console.error(error);
  }
};

const Signup2 = ({
  heading = "Signup",
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  buttonText = "Create Account",
  signupText = "Already a user?",
  signupUrl = "/login",
  className,
}: Signup2Props) => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(signupSchema),
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
          <form
            className="flex w-full lg:min-w-sm flex-col items-center gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md"
            onSubmit={form.handleSubmit(onSubmit)}
          >
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
            <div className="flex w-full flex-col gap-2">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                {...form.register("confirmPassword")}
                placeholder="Password"
                className="text-sm"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {buttonText}
            </Button>
          </form>
          <span className="text-sm text-muted-foreground">or</span>
          <div className="flex flex-row gap-2 mt-4">
            {Providers.GOOGLE && (
              <a href="/auth/social/provider=google" title="Google">
                <Image
                  src="./public/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
              </a>
            )}
          </div>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <a
              href={signupUrl}
              className="font-medium text-primary hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup2 };
