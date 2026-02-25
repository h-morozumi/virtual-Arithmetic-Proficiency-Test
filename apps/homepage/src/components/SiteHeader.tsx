import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import MobileNav from "@/components/MobileNav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ロゴ — トップへ戻る */}
        <Link href="/" className="group flex items-center gap-2">
          <h1 className="text-lg font-bold leading-tight transition group-hover:text-primary sm:text-xl">
            <span className="block text-caption font-normal tracking-widest text-placeholder">
              公益財団法人
            </span>
            日本子供算数検定
          </h1>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex" aria-label="メインメニュー">
          <Link href="/#about" className="transition hover:text-primary">
            検定について
          </Link>
          <Link href="/#levels" className="transition hover:text-primary">
            検定級一覧
          </Link>
          <Link href="/#schedule" className="transition hover:text-primary">
            試験日程
          </Link>
          <Link href="/#faq" className="transition hover:text-primary">
            よくある質問
          </Link>
          <AuthNav />
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
