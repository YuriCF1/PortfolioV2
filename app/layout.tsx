import type { Metadata } from "next";
import { Jost } from 'next/font/google';
import "./globals.css";
import { LanguageContextProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Yuri Cruz - Portfolio",
  description: "Full Stack Developer Portfolio",
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
          <ThemeProvider>
            {/* <ThemeTest /> */}
            {children}
          </ThemeProvider>
        </LanguageContextProvider>
      </body>
    </html>
  );
}