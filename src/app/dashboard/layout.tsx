import { TooltipProvider } from "@/components/ui/tooltip"
import type { Metadata } from "next";
import React from 'react'
import Dashboard from "@/components/dashboard";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Dashboard - Wall-V",
  description: "Access your personalized dashboard to manage your projects, view analytics, and customize your settings. Stay organized and in control with our intuitive dashboard designed for developers.",
  keywords: "Dashboard, Wall-V, Projects, Analytics, Settings, Developer Tools",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Valeed Naeem",
      url: "https://www.wall-v.com/",
    },
  ],
  openGraph: {
    title: "Dashboard - Wall-V",
    description: "Access your personalized dashboard to manage your projects, view analytics, and customize your settings. Stay organized and in control with our intuitive dashboard designed for developers.",
    url: "https://www.wall-v.com/dashboard",
    siteName: "Wall-V",
    images: [
      {
        url: "https://www.wall-v.com/dashboard-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wall-V Dashboard Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


async function dashboardLayout({ children }: LayoutProps) {

  return (
    <>
      <TooltipProvider>
        <Dashboard>
          {children}
        </Dashboard>
      </TooltipProvider>
    </>
  )
}

export default dashboardLayout;