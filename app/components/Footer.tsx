'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社家来</h3>
            <p className="text-sm mb-2">〒910-0000</p>
            <p className="text-sm mb-2">福井県福井市○○町0-0</p>
            <p className="text-sm mb-2">TEL: 0776-00-0000</p>
            <p className="text-sm mb-2">営業時間: 9:00〜18:00</p>
            <p className="text-sm">定休日: 水曜日・日曜日・祝日</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">メニュー</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  私たちについて
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="text-gray-300 hover:text-white">
                  家来の家づくり
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  できること
                </Link>
              </li>
              <li>
                <Link href="#works" className="text-gray-300 hover:text-white">
                  手がけた家
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#blog" className="text-gray-300 hover:text-white">
                  暮らしのヒント
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-gray-300 hover:text-white">
                  家づくりの流れ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 mt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} 株式会社家来（うちくる） All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 