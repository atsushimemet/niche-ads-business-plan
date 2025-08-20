import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ニッチ広告事業計画",
  description: "ニッチ広告事業の事業計画書サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <header className="bg-white shadow-sm border-b">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">ニッチ広告事業計画</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">ホーム</a>
                  <a href="/business-plan" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">事業計画詳細</a>
                  <a href="/business-model" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">ビジネスモデル</a>
                  <a href="/revenue-plan" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">収益計画</a>
                  <a href="/user-problems" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">ユーザー課題</a>
                  <a href="/strengths" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">事業・技術的強み</a>
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
