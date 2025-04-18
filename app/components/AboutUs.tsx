'use client';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">私たちについて</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">社名の想い</h3>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              「家来」と書いて「うちくる」。「うちに来る？」と気軽に声をかけられるような、温かく親しみやすい関係をお客様と築きたい。そんな想いを込めています。私たちは、お客様の住まいに寄り添い、共に未来を育むパートナーです。
            </p>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-800">代表メッセージ</h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              福井の豊かな自然と文化に根ざし、日本の美徳である"さりげないおもてなし"の心を形にする家づくりを目指しています。住むほどに愛着が増し、日々の暮らしが豊かになる、そんな住まいをお届けします。
            </p>
            
            <div className="flex items-center">
              <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                <Image
                  src="/img/owner_deco.png"
                  alt="代表写真"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">代表取締役</p>
                <p className="text-lg font-bold text-gray-800">家来 太郎</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/img/concept_staff.jpg"
                alt="家来のスタッフ"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">チーム紹介</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                設計プランナーから現場の職人まで、顔の見える安心感。お客様一人ひとりの想いを大切に、経験豊富なスタッフが親身に対応します。「こんなこと頼めるかな？」も、まずはお気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 