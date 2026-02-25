import Link from "next/link";
import { levels } from "@/data/levels";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const features = [
  {
    icon: "📐",
    title: "段階的なレベル設定",
    desc: "幼児から小学6年生まで、7段階の級で着実にステップアップ。",
  },
  {
    icon: "🏆",
    title: "合格証の発行",
    desc: "合格者には公式認定証を発行。お子さまの自信と達成感を育みます。",
  },
  {
    icon: "📊",
    title: "詳細な成績分析",
    desc: "分野別のスコアで弱点を可視化。次の学習につなげられます。",
  },
];

const schedule = [
  {
    id: 1,
    name: "2026年度 第1回検定",
    examDate: "2026年6月14日（日）",
    applyStart: "2026年3月1日",
    applyEnd: "2026年5月16日",
    resultDate: "2026年7月上旬",
    status: "受付中" as const,
  },
  {
    id: 2,
    name: "2026年度 第2回検定",
    examDate: "2026年10月18日（日）",
    applyStart: "2026年7月1日",
    applyEnd: "2026年9月19日",
    resultDate: "2026年11月上旬",
    status: "準備中" as const,
  },
  {
    id: 3,
    name: "2026年度 第3回検定",
    examDate: "2027年2月7日（日）",
    applyStart: "2026年11月1日",
    applyEnd: "2027年1月9日",
    resultDate: "2027年3月上旬",
    status: "準備中" as const,
  },
];

const faqs = [
  {
    q: "検定は何歳から受けられますか？",
    a: "年齢制限はありません。10級（幼児対象）から、どなたでも受検いただけます。お子さまの学習段階に合った級をお選びください。",
  },
  {
    q: "受検料はいくらですか？",
    a: "10級〜8級は1,500円、7級〜5級は2,000円、4級は2,500円です（すべて税込）。お支払いはクレジットカードまたはコンビニ払いに対応しています。",
  },
  {
    q: "試験会場はどこですか？",
    a: "全国47都道府県の公開会場で実施します。また、オンライン受検（自宅受検）にも対応しています。詳しくは申し込み時に会場をご確認ください。",
  },
  {
    q: "合格するとどうなりますか？",
    a: "合格者には公式の合格証（認定証）を郵送でお届けします。また、マイページから合格証のデジタル版をダウンロードすることもできます。",
  },
  {
    q: "不合格だった場合、再受検できますか？",
    a: "はい、何度でも受検可能です。次回以降の検定日程でお申し込みいただけます。成績表で弱点を確認し、次回に活かしましょう。",
  },
  {
    q: "どのように勉強すればよいですか？",
    a: "各級のページに出題範囲と学習のポイントを掲載しています。また、公式の練習問題集（別売）もご活用いただけます。",
  },
  {
    q: "保護者が付き添うことはできますか？",
    a: "10級・9級（幼児〜小学1年対象）については、保護者の方が試験会場内で待機いただけます。8級以上は会場外でお待ちください。",
  },
  {
    q: "結果はいつわかりますか？",
    a: "検定日からおよそ3〜4週間後に、マイページ上で成績と合否をご確認いただけます。合格証は別途郵送いたします。",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* ── ヒーロー ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-100">
        {/* 装飾的な背景要素 */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:py-32 lg:py-40">
          <p className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            2026年度 第1回検定 受付中
          </p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            算数の力を、
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              確かな自信に。
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            日本子供算数検定は、お子さまの算数力を正しく測り、
            学習意欲と自信を育てる検定試験です。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#apply"
              className="rounded-xl bg-primary px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl"
            >
              検定に申し込む
            </a>
            <a
              href="#about"
              className="rounded-xl border-2 border-primary/20 bg-white/60 px-8 py-3.5 text-base font-bold text-primary backdrop-blur transition hover:border-primary/40 hover:bg-white"
            >
              詳しく見る
            </a>
          </div>
        </div>
      </section>

      {/* ── 特徴セクション ── */}
      <section id="about" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              検定について
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              日本子供算数検定は、幼児から小学6年生までを対象とした算数の検定試験です。
              お子さまの学習段階に合わせた級を設定し、合格を通じて達成感と学ぶ喜びを提供します。
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="text-4xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 検定級一覧 ── */}
      <section id="levels" className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Levels
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              検定級一覧
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {levels.map((item) => (
              <Link
                key={item.label}
                href={`/levels/${item.id}`}
                className="group relative overflow-hidden rounded-2xl border border-white bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* グラデーションアクセント */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color}`}
                />
                <span
                  className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} px-4 py-1.5 text-sm font-bold text-white shadow-sm`}
                >
                  {item.label}
                </span>
                <p className="mt-3 text-base font-semibold text-gray-900">
                  {item.target}
                </p>
                <p className="mt-1 text-sm text-gray-500">{item.tagline}</p>
                <span className="mt-3 inline-block text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100">
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 試験日程 ── */}
      <section id="schedule" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Schedule
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              試験日程
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              2026年度は年3回の検定を予定しています。各回の日程と申込期間は以下のとおりです。
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            {schedule.map((s) => (
              <div
                key={s.id}
                className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
              >
                {/* ステータスバッジ */}
                <span
                  className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold ${
                    s.status === "受付中"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {s.status}
                </span>

                <h3 className="text-lg font-bold text-gray-900">{s.name}</h3>

                <div className="mt-4 grid gap-4 text-sm sm:grid-cols-2 md:grid-cols-4">
                  <div>
                    <p className="font-medium text-gray-400">試験日</p>
                    <p className="mt-1 text-base font-semibold text-gray-800">
                      {s.examDate}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">申込開始</p>
                    <p className="mt-1 text-gray-700">{s.applyStart}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">申込締切</p>
                    <p className="mt-1 text-gray-700">{s.applyEnd}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">結果発表</p>
                    <p className="mt-1 text-gray-700">{s.resultDate}</p>
                  </div>
                </div>

                {s.status === "受付中" && (
                  <div className="mt-6">
                    <a
                      href="#apply"
                      className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark"
                    >
                      この回に申し込む
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── よくある質問 ── */}
      <section id="faq" className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              よくある質問
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="text-base font-semibold text-gray-900">
                    {faq.q}
                  </span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-gray-500">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA セクション ── */}
      <section className="bg-gradient-to-r from-primary to-accent py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            お子さまの算数力を確かめよう
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            まずは実力にあった級を選んで、チャレンジしてみましょう。
          </p>
          <a
            href="#apply"
            className="mt-8 inline-block rounded-xl bg-white px-10 py-4 text-base font-bold text-primary shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            検定に申し込む
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
