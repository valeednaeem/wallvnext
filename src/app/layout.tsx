"Use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          {children}
      </body>
      <Footer />
    </html>
  );
}
