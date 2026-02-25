"use client";

import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

type Props = {
  className?: string;
  children: React.ReactNode;
  /** 申し込み後のリダイレクト先（デフォルト /mypage） */
  redirect?: string;
};

/** ログイン済みならマイページ、未ログインならログイン画面へ誘導 */
export default function ApplyButton({
  className,
  children,
  redirect = "/mypage",
}: Props) {
  const { user } = useAuth();

  const href = user
    ? redirect
    : `/login?redirect=${encodeURIComponent(redirect)}`;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
