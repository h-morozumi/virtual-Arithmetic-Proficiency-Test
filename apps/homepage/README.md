# Homepage — ホームページ・マイページ

検定の紹介サイトおよび受験者向けマイページを提供する Next.js アプリケーションです。

## 主な機能

- **トップページ** — 検定の概要、特徴、検定級一覧、試験日程、よくある質問
- **検定級詳細ページ** (`/levels/[level]`) — 各級の試験形式・出題範囲・学習のポイント
- **ログイン / 新規登録** (`/login`, `/register`) — ダミー認証によるユーザー管理
- **マイページ** (`/mypage`) — 受験状況・成績・合格証の確認（プレースホルダー）

## 技術構成

| カテゴリ | 技術 |
| --- | --- |
| フレームワーク | Next.js 15（App Router） |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS 4 |
| 認証 | ダミー認証（localStorage ベース） |

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト（AuthProvider）
│   ├── page.tsx            # トップページ（Server Component）
│   ├── globals.css         # グローバル CSS / Tailwind テーマ
│   ├── levels/
│   │   └── [level]/
│   │       └── page.tsx    # 級詳細ページ（SSG）
│   ├── login/
│   │   └── page.tsx        # ログインページ
│   ├── register/
│   │   └── page.tsx        # 新規登録ページ
│   └── mypage/
│       └── page.tsx        # マイページ（要認証）
├── components/
│   ├── ApplyButton.tsx     # 検定申し込みボタン（Server Component）
│   ├── AuthNav.tsx         # 認証状態に応じたナビゲーション
│   ├── FullScreenMessage.tsx # 全画面メッセージ（ローディング等）
│   ├── SiteHeader.tsx      # サイト共通ヘッダー
│   └── SiteFooter.tsx      # サイト共通フッター
├── contexts/
│   └── AuthContext.tsx      # 認証 Context（ダミー実装）
├── data/
│   └── levels.ts           # 検定級マスターデータ
└── assets/
    └── images/levels/      # 各級のイラスト（SVG）
```

## 開発

```bash
# プロジェクトルートから
pnpm run dev:homepage

# または apps/homepage 内で
pnpm dev
```

http://localhost:3000 で起動します。

## ビルド

```bash
pnpm run build:homepage
```

## Docker

### イメージのビルド

モノレポルート（`/`）をビルドコンテキストとして指定します。

```bash
# プロジェクトルートで実行
docker build -f apps/homepage/Dockerfile -t homepage .
```

### コンテナの起動

```bash
docker run -p 3000:3000 homepage
```

http://localhost:3000 でアクセスできます。

バックグラウンドで起動する場合:

```bash
docker run -d -p 3000:3000 --name homepage homepage
```

### コンテナの停止

```bash
docker stop homepage
```

## テスト用アカウント

| ユーザー ID | パスワード |
| --- | --- |
| `testuser` | `password123` |
