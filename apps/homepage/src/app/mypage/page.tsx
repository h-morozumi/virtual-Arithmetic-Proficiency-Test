"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function MyPage() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();

  // 未ログイン → ログインページへ
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login?redirect=/mypage");
    }
  }, [isLoading, user, router]);

  // ロード中 or 未ログイン（リダイレクト待ち）
  if (isLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-gray-400">読み込み中…</div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* ── プロフィール カード ── */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              {/* アバター */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-3xl font-bold text-white shadow-lg">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">
                  {user.name}
                  <span className="ml-2 text-base font-normal text-gray-400">
                    さん
                  </span>
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  ユーザーID: {user.id}
                </p>
                <p className="text-sm text-gray-500">
                  メール: {user.email}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-600 transition hover:border-red-300 hover:text-red-600"
              >
                ログアウト
              </button>
            </div>
          </div>

          {/* ── 受験状況 ── */}
          <section className="mt-8">
            <h2 className="text-lg font-bold text-gray-900">受験状況</h2>
            <div className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
              <div className="text-4xl">📋</div>
              <p className="mt-3 text-gray-500">
                まだ受験の申し込みがありません
              </p>
              <Link
                href="/#levels"
                className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark"
              >
                検定に申し込む
              </Link>
            </div>
          </section>

          {/* ── 成績一覧 ── */}
          <section className="mt-8">
            <h2 className="text-lg font-bold text-gray-900">成績一覧</h2>
            <div className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
              <div className="text-4xl">📊</div>
              <p className="mt-3 text-gray-500">
                まだ成績データがありません
              </p>
            </div>
          </section>

          {/* ── 合格証 ── */}
          <section className="mt-8">
            <h2 className="text-lg font-bold text-gray-900">合格証</h2>
            <div className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
              <div className="text-4xl">🏆</div>
              <p className="mt-3 text-gray-500">
                合格証はまだ発行されていません
              </p>
            </div>
          </section>

          {/* ── クイックリンク ── */}
          <section className="mt-8 grid gap-4 sm:grid-cols-3">
            <Link
              href="/#schedule"
              className="rounded-2xl border border-gray-200 bg-white p-5 text-center transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="text-2xl">🗓️</div>
              <p className="mt-2 text-sm font-semibold text-gray-700">
                試験日程
              </p>
            </Link>
            <Link
              href="/#levels"
              className="rounded-2xl border border-gray-200 bg-white p-5 text-center transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="text-2xl">📐</div>
              <p className="mt-2 text-sm font-semibold text-gray-700">
                検定級一覧
              </p>
            </Link>
            <Link
              href="/#faq"
              className="rounded-2xl border border-gray-200 bg-white p-5 text-center transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="text-2xl">❓</div>
              <p className="mt-2 text-sm font-semibold text-gray-700">
                よくある質問
              </p>
            </Link>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
