'use client';
import Image from 'next/image';

const Philosophy = () => {
  const philosophyPoints = [
    {
      title: "心地よい動線",
      description: "毎日の家事や急な来客にもスマートに対応できる流れ。",
      image: "/img/concept04.jpg",
      deco: "/img/concept_deco04.png"
    },
    {
      title: "機能美の収納",
      description: "すっきりと片付き、美しく見せる工夫。",
      image: "/img/concept05.jpg",
      deco: "/img/concept_deco05.png"
    },
    {
      title: "自然との調和",
      description: "光や風を効果的に取り入れ、季節を感じる暮らし。",
      image: "/img/concept06.jpg",
      deco: "/img/concept_deco06.png"
    },
    {
      title: "福井らしさ",
      description: "地域の気候や文化に寄り添った素材選びと設計。",
      image: "/img/concept07.jpg",
      deco: "/img/concept_deco03.png"
    }
  ];

  return (
    <section id="philosophy" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">家来の家づくり</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
            私たちが目指すのは、単に美しいだけでなく「本当に暮らしやすい」家。家族の成長やライフスタイルの変化にも柔軟に対応できる間取り、福井の気候風土に適した快適性、そして訪れる人が心地よさを感じるような、おもてなしの空間づくりを追求します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {philosophyPoints.map((point, index) => (
            <div key={index} className="relative">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-amber-600 flex items-center justify-center p-4">
                  <Image
                    src={point.deco}
                    alt={`${point.title}のアイコン`}
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">ストーリー</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            家は、思い出を重ね、家族の物語を紡ぐ場所。私たちは、その大切な舞台づくりを、心を込めてお手伝いします。
          </p>
          <div className="flex justify-center mt-8">
            <div className="relative w-full max-w-3xl h-64 rounded-lg overflow-hidden">
              <Image
                src="/img/concept01.jpg"
                alt="家族の物語"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy; 