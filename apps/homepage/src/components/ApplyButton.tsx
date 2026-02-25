import Link from "next/link";

type Props = {
  className?: string;
  children: React.ReactNode;
  /** リンク先（デフォルト /mypage — 未ログインなら mypage 側でログインへリダイレクト） */
  href?: string;
};

/**
 * 検定申し込みボタン（Server Component）。
 * 認証状態を参照しないため、クライアントバンドルに含まれません。
 * 未ログイン時は遷移先の認証ガードがログインページへリダイレクトします。
 */
export default function ApplyButton({
  className,
  children,
  href = "/mypage",
}: Props) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
