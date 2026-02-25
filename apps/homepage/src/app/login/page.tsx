"use client";

import { Suspense, useEffect, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const { login, user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/mypage";

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // すでにログイン済みならリダイレクト
  useEffect(() => {
    if (user) {
      router.replace(redirect);
    }
  }, [user, redirect, router]);

  if (user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-gray-400">リダイレクト中…</div>
      </div>
    );
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const result = login(userId, password);
    if (result.ok) {
      router.push(redirect);
    } else {
      setError(result.error ?? "ログインに失敗しました");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-100 px-4 py-16">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
            {/* タイトル */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">ログイン</h1>
              <p className="mt-2 text-sm text-gray-500">
                ユーザーIDとパスワードを入力してください
              </p>
            </div>

            {/* エラー */}
            {error && (
              <div className="mt-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">
                {error}
              </div>
            )}

            {/* フォーム */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="userId"
                  className="block text-sm font-medium text-gray-700"
                >
                  ユーザーID
                </label>
                <input
                  id="userId"
                  type="text"
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="testuser"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  パスワード
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="password123"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark"
              >
                ログイン
              </button>
            </form>

            {/* テスト情報 */}
            <div className="mt-5 rounded-lg bg-gray-50 p-4 text-xs text-gray-500">
              <p className="font-semibold text-gray-600">テスト用アカウント</p>
              <p className="mt-1">
                ID: <code className="rounded bg-gray-200 px-1.5 py-0.5">testuser</code>
                　パスワード: <code className="rounded bg-gray-200 px-1.5 py-0.5">password123</code>
              </p>
            </div>

            {/* 登録リンク */}
            <p className="mt-6 text-center text-sm text-gray-500">
              アカウントをお持ちでない方は
              <Link
                href={`/register${redirect !== "/mypage" ? `?redirect=${encodeURIComponent(redirect)}` : ""}`}
                className="ml-1 font-semibold text-primary transition hover:text-primary-dark"
              >
                新規登録
              </Link>
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
