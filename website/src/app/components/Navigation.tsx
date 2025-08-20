"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
              Niche Ads 事業計画
            </Link>
          </div>
          
          {/* Desktop Navigation */}
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="メニューを開く"
            >
              <span className="sr-only">メニューを開く</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              ホーム
            </Link>
            <Link
              href="/business-plan"
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              事業計画詳細
            </Link>
            <Link
              href="/business-model"
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              ビジネスモデル
            </Link>
            <Link
              href="/revenue-plan"
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              収益計画
            </Link>
            <Link
              href="/user-problems"
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              ユーザー課題
            </Link>
            <Link
              href="/strengths"
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              事業・技術的強み
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
