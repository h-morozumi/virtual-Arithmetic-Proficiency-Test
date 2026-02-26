import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { AppInsightsProvider } from "@/components/AppInsightsProvider";

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
      <body className="font-sans text-foreground antialiased">
        <AppInsightsProvider
          connectionString={process.env.NEXT_PUBLIC_APPLICATIONINSIGHTS_CONNECTION_STRING}
        >
          <AuthProvider>{children}</AuthProvider>
        </AppInsightsProvider>
      </body>
    </html>
  );
}
