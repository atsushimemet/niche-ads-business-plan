import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niche Ads 事業計画",
  description: "Niche Ads 事業の事業計画書サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <header className="bg-white shadow-sm border-b">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">Niche Ads 事業計画</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">ホーム</Link>
                  <Link href="/business-plan" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">事業計画詳細</Link>
                  <Link href="/business-model" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">ビジネスモデル</Link>
                  <Link href="/revenue-plan" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">収益計画</Link>
                  <Link href="/user-problems" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">ユーザー課題</Link>
                  <Link href="/strengths" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">事業・技術的強み</Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
