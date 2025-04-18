'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

// フォームの状態の型定義
interface FormState {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  privacy: boolean;
}

// エラーの型定義
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
  privacy?: string;
}

const Contact = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    privacy: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) newErrors.name = '氏名を入力してください';
    if (!formState.email.trim()) newErrors.email = 'メールアドレスを入力してください';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = '正しいメールアドレスを入力してください';
    }
    if (!formState.phone.trim()) newErrors.phone = '電話番号を入力してください';
    if (!formState.inquiryType) newErrors.inquiryType = 'お問い合わせ内容を選択してください';
    if (!formState.message.trim()) newErrors.message = 'お問い合わせ内容を入力してください';
    if (!formState.privacy) newErrors.privacy = 'プライバシーポリシーに同意してください';
    
    return newErrors;
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // ここに実際のフォーム送信ロジックを追加
    // API呼び出しなどの処理
    
    setTimeout(() => {
      // 送信成功を模擬
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        privacy: false
      });
      setErrors({});
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">お問い合わせ</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            家づくりに関するご質問、ご相談、資料請求など、お気軽にお寄せください。「こんな初歩的なことを聞いてもいいのかな？」といったご心配は不要です。丁寧にお答えします。
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* 会社情報 */}
              <div className="bg-amber-600 text-white p-8">
                <h3 className="text-2xl font-bold mb-6">お問い合わせ先</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-2">株式会社家来（うちくる）</h4>
                    <p className="mb-1">〒910-0000</p>
                    <p className="mb-1">福井県福井市○○町0-0</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-medium">電話</span>
                    </div>
                    <p className="text-xl font-bold mb-1">0776-00-0000</p>
                    <p className="text-sm">受付時間: 9:00〜18:00</p>
                    <p className="text-sm">定休日: 水曜日・日曜日・祝日</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">メール</span>
                    </div>
                    <p className="break-all">info@uchikuru.co.jp</p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-lg font-bold mb-4">アクセス</h4>
                  <div className="bg-white rounded-md p-2">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51680.92962116922!2d136.21011723323358!3d36.06231219108834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8b998154552f7%3A0x4e8b19dec9297cf9!2z56aP5LqV55yM56aP5LqV5biC!5e0!3m2!1sja!2sjp!4v1704983175593!5m2!1sja!2sjp" 
                      width="100%" 
                      height="200" 
                      style={{border:0}} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="株式会社家来の地図"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              {/* お問い合わせフォーム */}
              <div className="col-span-2 p-8">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">お問い合わせありがとうございます</h3>
                    <p className="text-gray-600 mb-8">
                      内容を確認の上、担当者よりご連絡いたします。<br />
                      通常、1〜2営業日以内にご返信いたします。
                    </p>
                    <button
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded"
                      onClick={() => setSubmitSuccess(false)}
                    >
                      新しいお問い合わせ
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          お名前 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="例：家来 太郎"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          メールアドレス <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="例：info@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        電話番号 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="例：0776000000"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        value={formState.inquiryType}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">選択してください</option>
                        <option value="新築について">新築について</option>
                        <option value="リフォームについて">リフォームについて</option>
                        <option value="土地探しについて">土地探しについて</option>
                        <option value="資料請求">資料請求</option>
                        <option value="見学会について">見学会について</option>
                        <option value="その他">その他</option>
                      </select>
                      {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        お問い合わせ詳細 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="お問い合わせ内容を具体的にご記入ください。"
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          checked={formState.privacy}
                          onChange={handleChange}
                          className={`w-4 h-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded ${
                            errors.privacy ? 'border-red-500' : ''
                          }`}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="privacy" className="font-medium text-gray-700">
                          <Link href="#" className="text-amber-600 hover:underline">プライバシーポリシー</Link> に同意します <span className="text-red-500">*</span>
                        </label>
                        {errors.privacy && <p className="text-red-500 text-sm mt-1">{errors.privacy}</p>}
                      </div>
                    </div>
                    
                    <div className="flex justify-center pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full md:w-1/2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-md inline-flex items-center justify-center ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            送信中...
                          </>
                        ) : (
                          <>
                            送信する
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 