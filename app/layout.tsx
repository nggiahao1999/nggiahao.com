import "../assets/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/misc/(theme)/theme-provider";
import Header from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import Image from "next/image";
// import { Analytics } from "@/components/misc/analytics";
import gradientImg from "@/public/images/gradient.webp";
import { Toaster } from "@/components/ui/sonner";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const info = {
  name: "Nguyễn Gia Hào",
  description: "Hello, I'm Nguyễn Gia Hào. I'm Software Engineer From Vietnam. Welcome to my little corner on the web!",
  url: "https://nggiahao.com",
  socials: {
    twitter: "@nggiahao9o9",
    facebook: "hao.dajgja"
  },
  phone: "+84 337 551 513",
  address: "Biên Giang, Hà Đông, Hà Nội",
  email: "giahao9899@gmail.com"
};

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: info.name,
  description: info.description,
  authors: {
    name: info.name,
    url: info.url,
  },
  creator: info.name,
  openGraph: {
    type: "website",
    url: info.url,
    title: info.name,
    description: info.description,
  },
  twitter: {
    card: "summary_large_image",
    title: info.name,
    description: info.description,
    creator: info.socials.twitter,
  },
};

interface ChildrenProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="container max-w-3xl mx-auto min-h-screen py-5 px-3">
        <Header />
        <main className="md:mt-8 lg:mt-10 py-8">
          {children}
        </main>
        <Footer />
        <Image
          className="absolute left-0 md:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover w-full"
          src={gradientImg}
          role="presenation"
          alt="Gradient background"
          priority
        />
      </div>
      <Toaster />
    </ThemeProvider>
    </body>
    {/*<Analytics />*/}
    <link
      href="/favicons/favicon-light.ico"
      rel="icon"
      media="(prefers-color-scheme: light)"
    />
    <link
      href="/favicons/favicon-dark.ico"
      rel="icon"
      media="(prefers-color-scheme: dark)"
    />
    </html>
  );
}
