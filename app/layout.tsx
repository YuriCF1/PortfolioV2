import type { Metadata } from "next";
import { Jost } from 'next/font/google';
import "./globals.css";;

export const metadata: Metadata = {
  title: "Yuri Cruz - Portfolio",
  description: "Full Stack Developer Portfolio showcasing my work and skills in web development, React, Node.js, and modern web technologies.",
};

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}
