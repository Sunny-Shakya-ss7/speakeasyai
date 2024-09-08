import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/header";
import { ClerkProvider } from "@clerk/nextjs";
import { ORIGIN_URL } from "@/lib/constants";
import { Toaster } from "@/components/ui/toaster";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BlabberBlog",
  description:
    "Turn your YouTube videos into SEO-friendly blogs with BlabberBlog. Automatically transcribe, summarize, and optimize your content for better visibility. Boost your online presence with AI-powered blogging made easy!",
  icons: {
    icon: "/icon.ico",
  },
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={fontSans.className}>
          <Header></Header>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
