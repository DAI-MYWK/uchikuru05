'use client';
import { useState } from 'react';
import Image from 'next/image';

const Works = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "開放感あふれるリビングの家",
      category: "新築",
      images: ["/img/case34_01v.jpg", "/img/case34_02-1024x633.jpg"],
      description: "光と風が抜ける、開放的な空間づくりを重視。家族の団らんを大切にした、広々としたリビングが特徴です。",
      testimonial: "友人を招いたとき、『素敵な家だね』と言われるのが嬉しいです。明るく開放的な空間で、毎日の暮らしが楽しくなりました。"
    },
    {
      id: 2,
      title: "和モダンな佇まいの家",
      category: "新築",
      images: ["/img/case35_01v.jpg", "/img/case35_03-1024x633.jpg"],
      description: "日本の伝統美と現代の機能性を融合。落ち着いた色調と木の温もりを感じる設計です。",
      testimonial: "日々の忙しさを忘れられる、心落ち着く空間になりました。来客時も『落ち着く家だね』と好評です。"
    },
    {
      id: 3,
      title: "家事動線を重視した機能的な家",
      category: "新築",
      images: ["/img/case36_01v.jpg", "/img/case36_03-1024x633.jpg"],
      description: "キッチンを中心に、洗濯・収納・家事スペースへの移動がスムーズになる設計。無駄のない動線で、日々の暮らしが効率的に。",
      testimonial: "キッチンから子供の様子が見えるので安心です。急な来客にも慌てなくなりました！"
    },
    {
      id: 4,
      title: "温もりあふれる木造住宅",
      category: "新築",
      images: ["/img/case37_01v.jpg", "/img/case37_02-1024x633.jpg"],
      description: "自然素材をふんだんに使用し、経年変化を楽しめる住まい。木の香りに包まれた、健やかな暮らしを実現。",
      testimonial: "木の温もりを感じる家になり、とても満足しています。家族の会話も増えました。"
    },
    {
      id: 5,
      title: "水回りの全面リノベーション",
      category: "リフォーム",
      images: ["/img/higashibarato_a_2-1024x683.jpg", "/img/higashibarato_a_3-1024x683.jpg"],
      description: "築30年の住宅の水回りを全面改修。最新の設備と断熱性能のアップで、快適さが大幅に向上しました。",
      testimonial: "古い家が見違えるように明るく使いやすくなりました。特にお風呂が寒くなくなって、冬の入浴が楽しみになりました。"
    },
    {
      id: 6,
      title: "ライフスタイルに合わせた間取り変更",
      category: "リフォーム",
      images: ["/img/higashibarato_b_1-1024x683.jpg", "/img/higashibarato_b_2-1024x683.jpg"],
      description: "子供の独立を機に、ゆとりある暮らしのための間取り変更。趣味の部屋と広々としたLDKを実現しました。",
      testimonial: "この家で過ごす時間が、前よりもっと好きになりました。趣味の時間も充実し、毎日が楽しいです。"
    }
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);
  
  return (
    <section id="works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">手がけた家</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            これまで家来（うちくる）が手がけてきた、様々な「うちくる」ストーリーが詰まった住まいをご紹介します。
          </p>
        </div>
        
        {/* カテゴリータブ */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`px-5 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'all' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('all')}
            >
              すべて
            </button>
            <button
              type="button"
              className={`px-5 py-2 text-sm font-medium ${
                activeTab === '新築' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('新築')}
            >
              新築
            </button>
            <button
              type="button"
              className={`px-5 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'リフォーム' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('リフォーム')}
            >
              リフォーム
            </button>
          </div>
        </div>
        
        {/* プロジェクト一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                    </svg>
                    <h4 className="text-sm font-bold text-gray-700">お客様の声</h4>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm italic">"{project.testimonial}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works; 