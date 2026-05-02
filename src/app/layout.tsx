import { TooltipProvider } from "@/components/ui/tooltip"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const font = Inter({
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wall-V - Valeed Naeem - Full Stack Developer",
  description: "A portfolio website showcasing the work and projects of Valeed Naeem, a full stack developer specializing in web development, software engineering, and technology solutions.",
  keywords: "Valeed Naeem, Full Stack Developer, Web Development, Software Engineering, Portfolio, Projects, Technology Solutions",
  authors: [
    {
      name: "Valeed Naeem",
      url: "https://www.wall-v.com/",
    },
  ],
  openGraph: {
    title: "Wall-V - Valeed Naeem - Full Stack Developer",
    description: "A portfolio website showcasing the work and projects of Valeed Naeem, a full stack developer specializing in web development, software engineering, and technology solutions.",
    url: "https://www.wall-v.com",
    siteName: "Wall-V",
    images: [
      {
        url: "https://www.wall-v.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wall-V Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased light`}
    >
      <body className="min-h-full bg-white dark:bg-black">
        <div className="fixed inset-0 z-[-1]" />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
