import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* ヘッダー */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.logo}>
            <span className={styles.logoSub}>公益財団法人</span>
            日本子供算数検定
          </h1>
          <nav className={styles.nav}>
            <a href="#about">検定について</a>
            <a href="#levels">検定級一覧</a>
            <a href="#schedule">試験日程</a>
            <a href="#faq">よくある質問</a>
            <a href="/mypage" className={styles.mypageLink}>
              マイページ
            </a>
          </nav>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>
            算数の力を、
            <br />
            確かな自信に。
          </h2>
          <p className={styles.heroText}>
            日本子供算数検定は、お子さまの算数力を正しく測り、
            <br />
            学習意欲と自信を育てる検定試験です。
          </p>
          <div className={styles.heroCta}>
            <a href="#apply" className={styles.btnPrimary}>
              検定に申し込む
            </a>
            <a href="#about" className={styles.btnSecondary}>
              詳しく見る
            </a>
          </div>
        </div>
      </section>

      {/* 検定について */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>検定について</h2>
          <p className={styles.sectionText}>
            日本子供算数検定は、幼児から小学6年生までを対象とした算数の検定試験です。
            お子さまの学習段階に合わせた級を設定し、合格を通じて達成感と学ぶ喜びを提供します。
          </p>
        </div>
      </section>

      {/* 検定級一覧 */}
      <section id="levels" className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>検定級一覧</h2>
          <div className={styles.levelGrid}>
            {[
              { level: "10級", target: "幼児", desc: "数の認識・数える力" },
              { level: "9級", target: "小学1年", desc: "たし算・ひき算の基礎" },
              {
                level: "8級",
                target: "小学2年",
                desc: "くり上がり・くり下がり",
              },
              { level: "7級", target: "小学3年", desc: "かけ算・わり算の基礎" },
              {
                level: "6級",
                target: "小学4年",
                desc: "小数・分数の基礎",
              },
              {
                level: "5級",
                target: "小学5年",
                desc: "割合・図形の面積",
              },
              {
                level: "4級",
                target: "小学6年",
                desc: "比・速さ・体積",
              },
            ].map((item) => (
              <div key={item.level} className={styles.levelCard}>
                <span className={styles.levelBadge}>{item.level}</span>
                <p className={styles.levelTarget}>{item.target}</p>
                <p className={styles.levelDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 試験日程 */}
      <section id="schedule" className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>試験日程</h2>
          <p className={styles.sectionText}>
            最新の試験日程については、準備中です。決まり次第こちらに掲載いたします。
          </p>
        </div>
      </section>

      {/* フッター */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>© 日本子供算数検定（公益財団法人）</p>
          <p className={styles.footerNote}>
            ※ これは仮想の団体です。実在の団体とは一切関係ありません。
          </p>
        </div>
      </footer>
    </div>
  );
}
