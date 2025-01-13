import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Badge Buddy",
  description: "Badge Buddy",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Badge Buddy",
    description: "Badge Buddy",
    url: "https://badge-buddy.vercel.app/",
    siteName: "BadgeBuddy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
