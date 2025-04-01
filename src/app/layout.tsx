import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "入試情報サイト",
  description:
    "A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "shadcn/ui sidebar",
    description:
      "A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "shadcn/ui sidebar",
    description:
      "A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.",
  },
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The root layout of the application.
 *
 * This component renders the root `html` and `body` elements, sets up the font
 * style, and provides a `ThemeProvider` that enables system theme support.
 *
 * @param {{ children: React.ReactNode }} props The props object.
 * @prop {React.ReactNode} children The children of the root layout.
 */
/******  e084eeb8-4657-46cc-9019-07825f30ed93  *******/export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
