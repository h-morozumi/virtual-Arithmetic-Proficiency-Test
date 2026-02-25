import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "日本子供算数検定 | 公益財団法人",
  description:
    "公益財団法人 日本子供算数検定の公式ホームページです。検定試験の情報やお申し込み、マイページへのアクセスはこちらから。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans text-gray-800 antialiased">{children}</body>
    </html>
  );
}
