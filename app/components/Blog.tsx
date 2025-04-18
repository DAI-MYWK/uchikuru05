'use client';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "急な来客にも慌てない収納術",
      excerpt: "来客時に慌てず、スムーズにおもてなしができる収納のコツをご紹介。リビングや玄関周りを中心に、日常使いと来客時の両方に対応できる収納アイデアをまとめました。",
      category: "お役立ちコラム",
      image: "/img/higashikariki_b_3-1024x683.jpg",
      date: "2023.09.15"
    },
    {
      id: 2,
      title: "福井の冬を快適に過ごす住まいの工夫",
      excerpt: "福井特有の寒さや雪に対応するための住まいの工夫をご紹介。断熱性能の向上から結露対策、玄関周りの雪対策まで、冬を快適に過ごすためのポイントを解説します。",
      category: "お役立ちコラム",
      image: "/img/shindo_sr_1-1-1024x683.jpg",
      date: "2023.10.22"
    },
    {
      id: 3,
      title: "K様邸 新築工事進捗レポート",
      excerpt: "現在建築中のK様邸の様子をお届けします。基礎工事が完了し、これから上棟を迎えます。お施主様こだわりの造作家具の打ち合わせの様子もご紹介。",
      category: "現場レポート",
      image: "/img/rakuie_3-1024x683.jpg",
      date: "2023.11.05"
    },
    {
      id: 4,
      title: "冬の完成見学会開催のお知らせ",
      excerpt: "12月10日(土)・11日(日)に、福井市内にて完成見学会を開催します。暖かさと機能性を両立させた住まいをぜひご体感ください。予約優先となりますので、お早めにお申し込みください。",
      category: "イベント・見学会",
      image: "/img/science_1-1024x725.jpg",
      date: "2023.11.18"
    },
    {
      id: 5,
      title: "家事がはかどるキッチンのレイアウト",
      excerpt: "毎日の料理を効率的に、そして楽しく行うためのキッチンレイアウトのポイントを解説。動線計画から収納、照明まで、使いやすさを追求したアイデアをご紹介します。",
      category: "お役立ちコラム",
      image: "/img/science_2-1024x683.jpg",
      date: "2023.12.03"
    },
    {
      id: 6,
      title: "T様邸リフォーム完成",
      excerpt: "築35年の住宅をフルリノベーションしたT様邸が完成しました。和室を活かしながらもモダンな要素を取り入れ、新しい生活がスタートしました。Before/Afterの写真とともにご紹介します。",
      category: "現場レポート",
      image: "/img/science_3-1024x683.jpg",
      date: "2023.12.20"
    }
  ];

  const categories = ["すべて", "お役立ちコラム", "現場レポート", "イベント・見学会"];
  
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">暮らしのヒント</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            住まいや暮らしに関する役立つ情報や、施工中の現場の様子、イベント情報などをお届けします。
          </p>
        </div>
        
        {/* カテゴリータブ（スクロール可能） */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-10">
          <div className="inline-flex space-x-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
                  index === 0 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* ブログ記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 left-0 bg-amber-600 text-white px-3 py-1 text-xs font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">{post.date}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                
                <Link href="#" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700">
                  続きを読む
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* もっと見るボタン */}
        <div className="text-center mt-12">
          <Link href="#" className="inline-flex items-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-3 rounded-md shadow-sm">
            もっと見る
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog; 