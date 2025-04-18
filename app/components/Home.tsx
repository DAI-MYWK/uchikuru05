'use client';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* バックグラウンド画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/mv.jpg"
          alt="家族が暮らす温かみのある住まい"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* コンテンツ */}
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-2xl text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            『ただいま』が、誇らしくなる家へ。
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 font-medium">
            福井の暮らしに、心地よさと"ちょっと自慢したくなる"彩りを。
          </p>
          
          <p className="text-base md:text-lg mb-10 max-w-xl leading-relaxed">
            家来（うちくる）は、見た目の美しさだけではなく、日々の暮らしやすさ、そして家族や友人を招いたときに感じるさりげない満足感を大切にしています。新築もリフォームも、あなたらしい理想の住まいを、福井の地で一緒に形にしませんか？
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-md inline-flex items-center justify-center">
              お問い合わせ
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            
            <Link href="#works" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 rounded-md inline-flex items-center justify-center">
              施工事例を見る
            </Link>
          </div>
        </div>
      </div>
      
      {/* スクロールダウンアイコン */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Home; 