'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "ご相談・ヒアリング",
      description: "お客様のご要望、ライフスタイル、ご予算などをお伺いします。家づくりの不安や疑問点、わからないことなど、何でもお気軽にご相談ください。",
      image: "/img/rakuie_1-1024x669.jpg",
      point: "まずはお気軽に。オンライン相談も可能です。"
    },
    {
      id: 2,
      title: "現地調査・プランニング",
      description: "敷地の調査・測量を行い、お客様のご要望をもとに間取りや外観などのプランをご提案します。何度でも打ち合わせを重ね、理想の住まいを形にしていきます。",
      image: "/img/shindo_sr_5-1024x683.jpg",
      point: "お客様と共に創る、世界に一つだけの家。"
    },
    {
      id: 3,
      title: "お見積り・ご契約",
      description: "詳細な仕様と費用をご提示します。ご予算に合わせた調整も可能です。納得いただけましたら、工事請負契約を締結し、具体的な工程に入ります。",
      image: "/img/rakuie_4-1024x683.jpg",
      point: "明朗な見積り。追加費用の心配なく。"
    },
    {
      id: 4,
      title: "着工・施工管理",
      description: "地鎮祭から始まり、基礎工事、上棟、内装工事と進みます。定期的に現場の様子をお伝えし、必要に応じて設備や内装の最終確認を行います。",
      image: "/img/higashikariki_b_1-1024x683.jpg",
      point: "職人の技術と丁寧な施工。隅々まで品質管理。"
    },
    {
      id: 5,
      title: "完成・お引き渡し",
      description: "最終チェックを行い、お客様立ち会いのもと完成検査を実施。すべて確認いただいた後、鍵のお引き渡しとなります。新しい暮らしのスタートです。",
      image: "/img/case38_01v.jpg",
      point: "感動の瞬間。新しい暮らしの始まり。"
    },
    {
      id: 6,
      title: "アフターサポート",
      description: "お引き渡し後も定期点検を実施。保証期間内はもちろん、長期にわたって住まいをサポートします。お住まいに関するご相談はいつでもお気軽に。",
      image: "/img/shindo_sr_8-1024x683.jpg",
      point: "長く安心して暮らせる住まいのために。"
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">家づくりの流れ</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            お客様との対話を重ねながら、一つひとつのステップを丁寧に、わかりやすく進めていきます。
          </p>
        </div>
        
        {/* ステップナビゲーション */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-4">
            {steps.map((step) => (
              <button
                key={step.id}
                className={`flex flex-col items-center justify-center w-16 h-16 rounded-full border-2 transition-all ${
                  activeStep === step.id 
                    ? 'bg-amber-600 text-white border-amber-600' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-amber-300'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <span className="text-lg font-bold">{step.id}</span>
                <span className="text-xs whitespace-nowrap mt-1">{step.id === activeStep ? 'STEP' : ''}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* アクティブステップの詳細 */}
        {steps.map((step) => (
          step.id === activeStep && (
            <div key={step.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  STEP {step.id}: {step.title}
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <div className="flex">
                    <svg className="w-6 h-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-amber-700 font-medium">{step.point}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-md inline-flex items-center">
                    お問い合わせ
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          )
        ))}
        
        {/* 安心への取り組み */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">安心への取り組み</h3>
          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            「まずは話を聞いてみたい」「予算内でどこまでできるか知りたい」という段階でも大丈夫です。お客様のご要望やご予算に合わせて、最適なプランをご提案できるよう、何度でも打ち合わせを重ねます。無理な勧誘は一切ありませんので、安心してお問い合わせください。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm flex items-start max-w-xs">
              <svg className="w-10 h-10 text-amber-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">長期保証システム</h4>
                <p className="text-sm text-gray-600">
                  建物に万が一のことがあっても、長期にわたる保証で安心。
                </p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm flex items-start max-w-xs">
              <svg className="w-10 h-10 text-amber-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">明確な資金計画</h4>
                <p className="text-sm text-gray-600">
                  予算に合わせた計画と明朗な見積りで、安心の資金計画を。
                </p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm flex items-start max-w-xs">
              <svg className="w-10 h-10 text-amber-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">定期的なメンテナンス</h4>
                <p className="text-sm text-gray-600">
                  定期点検で長く安心して住み続けられる住まいづくり。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 