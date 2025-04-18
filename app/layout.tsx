import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: "株式会社家来（うちくる） | 福井の新築・リフォーム",
  description: "福井県で新築住宅・リフォームを手がける株式会社家来（うちくる）。「ただいま」が誇らしくなる家づくりを。暮らしやすさと、ふとした時に感じる誇りを大切にした住まいを提案します。",
  keywords: "福井, 新築, リフォーム, 住宅, 家づくり, うちくる, 家来",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} ${notoSansJP.variable}`}>
        {children}
      </body>
    </html>
  );
}
