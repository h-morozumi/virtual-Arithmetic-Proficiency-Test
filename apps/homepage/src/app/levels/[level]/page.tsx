import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { levels, getLevelById } from "@/data/levels";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* ── 静的パラメータ生成 ── */
export function generateStaticParams() {
  return levels.map((l) => ({ level: String(l.id) }));
}

/* ── メタデータ ── */
type Props = { params: Promise<{ level: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level: levelParam } = await params;
  const data = getLevelById(Number(levelParam));
  if (!data) return {};
  return {
    title: `${data.label}（${data.target}）| 日本子供算数検定`,
    description: `${data.label}（${data.target}対象）— ${data.tagline}。出題範囲や学習のポイントをご紹介します。`,
  };
}

/* ── ページ本体 ── */
export default async function LevelPage({ params }: Props) {
  const { level: levelParam } = await params;
  const data = getLevelById(Number(levelParam));
  if (!data) notFound();

  // 前後の級
  const idx = levels.findIndex((l) => l.id === data.id);
  const prev = idx < levels.length - 1 ? levels[idx + 1] : null; // id が小さい方が上位
  const next = idx > 0 ? levels[idx - 1] : null;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* ── ヒーロー ── */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${data.color.replace(
          /from-/,
          "from-"
        )} py-16 sm:py-24`}
      >
        {/* ぼかし装飾 */}
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-black/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:gap-16">
          {/* テキスト */}
          <div className="flex-1 text-center md:text-left">
            <Link
              href="/#levels"
              className="mb-4 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur transition hover:bg-white/30"
            >
              ← 検定級一覧へ
            </Link>
            <h1 className="mt-2 text-5xl font-extrabold text-white drop-shadow-sm sm:text-6xl">
              {data.label}
            </h1>
            <p className="mt-2 text-xl font-semibold text-white/90">
              対象: {data.target}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              {data.tagline}
            </p>
          </div>
          {/* イラスト */}
          <div className="w-full max-w-xs flex-shrink-0 md:max-w-sm">
            <Image
              src={data.image}
              alt={`${data.label}のイラスト`}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── 試験形式 ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            試験形式
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: "📝",
                label: "出題数",
                value: `${data.format.questions} 問`,
              },
              { icon: "⏱️", label: "試験時間", value: data.format.duration },
              { icon: "✅", label: "合格基準", value: data.format.passing },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <p className="mt-1 text-xl font-bold text-gray-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 出題範囲 ── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            出題範囲
          </h2>

          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {data.topics.map((topic, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <span
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${data.color} text-xs font-bold text-white`}
                >
                  {i + 1}
                </span>
                <span className="text-gray-700">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 学習のポイント ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            学習のポイント
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {data.tips.map((tip, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6"
              >
                <span className="text-3xl">💡</span>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 前後の級ナビゲーション ── */}
      <section className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4">
          {next ? (
            <Link
              href={`/levels/${next.id}`}
              className="group flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-primary"
            >
              <span className="text-lg transition group-hover:-translate-x-1">
                ←
              </span>
              <span>
                <span className="block text-xs text-gray-400">上の級</span>
                {next.label}（{next.target}）
              </span>
            </Link>
          ) : (
            <span />
          )}

          <Link
            href="/#levels"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-primary hover:text-primary"
          >
            級一覧へ
          </Link>

          {prev ? (
            <Link
              href={`/levels/${prev.id}`}
              className="group flex items-center gap-2 text-right text-sm font-medium text-gray-600 transition hover:text-primary"
            >
              <span>
                <span className="block text-xs text-gray-400">下の級</span>
                {prev.label}（{prev.target}）
              </span>
              <span className="text-lg transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className={`bg-gradient-to-r ${data.color} py-16`}
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {data.label}にチャレンジしよう
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">
            まずは練習問題で力試し。準備ができたら検定に申し込みましょう。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#apply"
              className="rounded-xl bg-white px-8 py-3.5 text-base font-bold text-gray-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              検定に申し込む
            </a>
            <Link
              href="/"
              className="rounded-xl border-2 border-white/30 px-8 py-3.5 text-base font-bold text-white backdrop-blur transition hover:border-white/60 hover:bg-white/10"
            >
              トップへ戻る
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
