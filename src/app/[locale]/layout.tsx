import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTProvider } from "gt-next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "<T> Component Basics | GT",
  description:
    "Minimal demo of General Translation's <T> component for translating JSX in place",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} antialiased`}>
        <GTProvider>{children}</GTProvider>
      </body>
    </html>
  );
}
