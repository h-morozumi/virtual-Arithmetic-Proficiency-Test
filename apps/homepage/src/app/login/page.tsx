"use client";

import { Suspense, useEffect, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FullScreenMessage from "@/components/FullScreenMessage";

export default function LoginPage() {
  return (
    <Suspense fallback={<FullScreenMessage />}>
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
    return <FullScreenMessage message="リダイレクト中…" />;
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

      <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-page-gradient-from via-page-gradient-via to-page-gradient-to px-4 py-16">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-border bg-surface p-8 shadow-xl">
            {/* タイトル */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">ログイン</h1>
              <p className="mt-2 text-sm text-muted">
                ユーザーIDとパスワードを入力してください
              </p>
            </div>

            {/* エラー */}
            {error ? (
              <div className="mt-4 rounded-lg bg-destructive-light p-3 text-center text-sm text-destructive" role="alert">
                {error}
              </div>
            ) : null}

            {/* フォーム */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="userId"
                  className="block text-sm font-medium text-foreground-secondary"
                >
                  ユーザーID
                </label>
                <input
                  id="userId"
                  type="text"
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-input px-4 py-2.5 text-foreground shadow-sm transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:outline-none"
                  placeholder="testuser"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground-secondary"
                >
                  パスワード
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-input px-4 py-2.5 text-foreground shadow-sm transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:outline-none"
                  placeholder="password123"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                ログイン
              </button>
            </form>

            {/* テスト情報 */}
            <div className="mt-5 rounded-lg bg-background-alt p-4 text-xs text-muted">
              <p className="font-semibold text-muted-foreground">テスト用アカウント</p>
              <p className="mt-1">
                ID: <code className="rounded bg-code-bg px-1.5 py-0.5">testuser</code>
                　パスワード: <code className="rounded bg-code-bg px-1.5 py-0.5">password123</code>
              </p>
            </div>

            {/* 登録リンク */}
            <p className="mt-6 text-center text-sm text-muted">
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
