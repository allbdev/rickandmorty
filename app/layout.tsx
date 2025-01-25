import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import "./globals.css";

import {Footer} from "@/components/Footer";

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "This is a project made by Vinícius Albuquerque you can find in github: albdev",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <div className={"bg-main-bg fixed h-[100dvh] w-[100dvw] top-0 left-0 z-[-1] bg-center"}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
