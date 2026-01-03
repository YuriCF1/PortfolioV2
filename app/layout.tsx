import type { Metadata } from "next";
import { Jost } from 'next/font/google';
import "./globals.css";;
import { LanguageContextProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Yuri Cruz - Portfolio",
  description: "Full Stack Developer Portfolio showcasing my work and skills in web development, React, Node.js, and modern web technologies.",
};

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${jost.variable}`}>
        <LanguageContextProvider>
          {children}
        </LanguageContextProvider>
      </body>
    </html>
  );
}
