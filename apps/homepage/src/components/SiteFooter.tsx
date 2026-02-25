import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto bg-footer py-10 text-center text-footer-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <Link
          href="/"
          className="text-sm text-footer-link transition hover:text-white"
        >
          トップページへ戻る
        </Link>
        <p className="mt-4 text-sm">© 日本子供算数検定（公益財団法人）</p>
        <p className="mt-2 text-xs text-footer-muted">
          ※ これは仮想の団体です。実在の団体とは一切関係ありません。
        </p>
      </div>
    </footer>
  );
}
