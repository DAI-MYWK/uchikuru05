'use client';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: "新築",
      description: "自由設計で叶える、あなただけの理想の住まい。ライフスタイルや家族構成、将来の夢を丁寧にヒアリングし、機能性とデザイン性を両立したプランをご提案。「人を呼びたくなる家」を一緒に創りましょう。",
      image: "/img/line-up_rakuie.jpg",
      icon: (
        <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "リフォーム・リノベーション",
      description: "キッチン・浴室などの水回り改修、断熱性能アップ、間取り変更による暮らしのアップデート、思い出の詰まった家の再生など。現状の良さを活かしつつ、新たな価値を加えます。「ちょっとした修繕」から大規模改修まで、お気軽にご相談を。",
      image: "/img/higashibarato_b_3-1024x683.jpg",
      icon: (
        <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
      )
    },
    {
      title: "アフターサポート",
      description: "お引き渡し後も、末永く安心して暮らしていただくために。定期的な点検やメンテナンスを通じて、大切な住まいを見守り続けます。「建てて終わり」ではない、長いお付き合いをお約束します。",
      image: "/img/modelhouse.png",
      icon: (
        <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">できること</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            新築からリフォーム、アフターケアまで。お客様の「理想の暮らし」を実現するために、私たちができることをご紹介します。
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold ml-3 text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link href="#contact" className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700">
                  ご相談はこちら
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 