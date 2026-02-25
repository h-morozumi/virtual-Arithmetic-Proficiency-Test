"use client";

import { Suspense, useEffect, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FullScreenMessage from "@/components/FullScreenMessage";

export default function RegisterPage() {
  return (
    <Suspense fallback={<FullScreenMessage />}>
      <RegisterContent />
    </Suspense>
  );
}

function RegisterContent() {
  const { register, user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/mypage";

  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  // すでにログイン済み
  useEffect(() => {
    if (user && !done) {
      router.replace(redirect);
    }
  }, [user, done, redirect, router]);

  if (user && !done) {
    return <FullScreenMessage message="リダイレクト中…" />;
  }

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("パスワードが一致しません");
      return;
    }
    if (form.password.length < 6) {
      setError("パスワードは6文字以上で入力してください");
      return;
    }

    const result = register({
      id: form.id,
      password: form.password,
      name: form.name,
      email: form.email,
    });

    if (result.ok) {
      setDone(true);
    } else {
      setError(result.error ?? "登録に失敗しました");
    }
  };

  /* ── 登録完了画面 ── */
  if (done) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 px-4 py-16">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              ✅
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900">
              登録が完了しました
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              ユーザー登録ありがとうございます。
              <br />
              自動的にログイン済みの状態です。
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/mypage"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark"
              >
                マイページへ
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-600 transition hover:border-primary hover:text-primary"
              >
                トップページへ
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  /* ── 登録フォーム ── */
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-100 px-4 py-16">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">新規登録</h1>
              <p className="mt-2 text-sm text-gray-500">
                アカウントを作成して検定に申し込みましょう
              </p>
            </div>

            {error ? (
              <div className="mt-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">
                {error}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="reg-id"
                  className="block text-sm font-medium text-gray-700"
                >
                  ユーザーID
                </label>
                <input
                  id="reg-id"
                  type="text"
                  required
                  value={form.id}
                  onChange={(e) => update("id", e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="半角英数字"
                />
              </div>

              <div>
                <label
                  htmlFor="reg-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  お名前
                </label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="検定 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="reg-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  メールアドレス
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="reg-pw"
                  className="block text-sm font-medium text-gray-700"
                >
                  パスワード
                </label>
                <input
                  id="reg-pw"
                  type="password"
                  required
                  minLength={6}
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="6文字以上"
                />
              </div>

              <div>
                <label
                  htmlFor="reg-pw2"
                  className="block text-sm font-medium text-gray-700"
                >
                  パスワード（確認）
                </label>
                <input
                  id="reg-pw2"
                  type="password"
                  required
                  minLength={6}
                  value={form.confirmPassword}
                  onChange={(e) => update("confirmPassword", e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="もう一度入力"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark"
              >
                アカウントを作成
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              すでにアカウントをお持ちの方は
              <Link
                href={`/login${redirect !== "/mypage" ? `?redirect=${encodeURIComponent(redirect)}` : ""}`}
                className="ml-1 font-semibold text-primary transition hover:text-primary-dark"
              >
                ログイン
              </Link>
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
