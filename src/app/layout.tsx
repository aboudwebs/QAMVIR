import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABOUDWEB | تصميم وتطوير مواقع الويب",
  description:
    "نصمم ونطور مواقع ويب عصرية وسريعة، مخصصة لهوية مشروعك بالكامل.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-white dark:bg-[#000000] text-neutral-950 dark:text-neutral-100 antialiased font-sans selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
