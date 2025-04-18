'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">株式会社家来</h1>
          <span className="ml-2 text-sm text-gray-600">うちくる</span>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-amber-600 font-medium">
            私たちについて
          </Link>
          <Link href="#philosophy" className="text-gray-700 hover:text-amber-600 font-medium">
            家来の家づくり
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-amber-600 font-medium">
            できること
          </Link>
          <Link href="#works" className="text-gray-700 hover:text-amber-600 font-medium">
            手がけた家
          </Link>
          <Link href="#blog" className="text-gray-700 hover:text-amber-600 font-medium">
            暮らしのヒント
          </Link>
          <Link href="#process" className="text-gray-700 hover:text-amber-600 font-medium">
            家づくりの流れ
          </Link>
          <Link href="#contact" className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700">
            お問い合わせ
          </Link>
        </nav>

        {/* モバイルメニューボタン */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* モバイルナビゲーション */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link href="#about" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>
              私たちについて
            </Link>
            <Link href="#philosophy" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>
              家来の家づくり
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>
              できること
            </Link>
            <Link href="#works" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>
              手がけた家
            </Link>
            <Link href="#blog" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>
              暮らしのヒント
            </Link>
            <Link href="#process" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>
              家づくりの流れ
            </Link>
            <Link href="#contact" className="bg-amber-600 text-white px-4 py-2 rounded-md text-center" onClick={toggleMenu}>
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 