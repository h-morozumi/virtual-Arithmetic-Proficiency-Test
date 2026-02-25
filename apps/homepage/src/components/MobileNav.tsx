"use client";

import { useState } from "react";
import Link from "next/link";
import AuthNav from "./AuthNav";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <>
      <button
        className="flex size-10 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-background-alt hover:text-foreground md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        {isOpen ? (
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {isOpen ? (
        <div className="absolute inset-x-0 top-full border-b border-border bg-surface shadow-lg md:hidden">
          <nav className="flex flex-col gap-1 p-4" aria-label="モバイルメニュー">
            <Link href="/#about" onClick={close} className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-background-alt hover:text-foreground">
              検定について
            </Link>
            <Link href="/#levels" onClick={close} className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-background-alt hover:text-foreground">
              検定級一覧
            </Link>
            <Link href="/#schedule" onClick={close} className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-background-alt hover:text-foreground">
              試験日程
            </Link>
            <Link href="/#faq" onClick={close} className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-background-alt hover:text-foreground">
              よくある質問
            </Link>
            <div className="mt-2 border-t border-border pt-3">
              <AuthNav />
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
