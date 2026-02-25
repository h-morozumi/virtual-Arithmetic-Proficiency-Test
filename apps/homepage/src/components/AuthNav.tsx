"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function AuthNav() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <span className="h-8 w-20 animate-pulse rounded-lg bg-gray-200" />
    );
  }

  if (user) {
    return (
      <Link
        href="/mypage"
        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white shadow-sm transition hover:bg-primary-dark"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
          {user.name.charAt(0)}
        </span>
        マイページ
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      className="rounded-lg bg-primary px-4 py-2 text-white shadow-sm transition hover:bg-primary-dark"
    >
      ログイン
    </Link>
  );
}
