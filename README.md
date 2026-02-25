# 日本子供算数検定（仮想プロジェクト）

> **公益財団法人 日本子供算数検定**の検定試験システムを模した仮想プロジェクトです。
> ※ 実在の団体・検定とは一切関係ありません。

## 概要

本リポジトリは、子供向け算数検定を運営する仮想団体のアプリケーション群を **pnpm ワークスペースによるモノレポ構成** で管理しています。

## アプリ一覧

| アプリ | ディレクトリ | 説明 | 状態 |
| --- | --- | --- | --- |
| ホームページ・マイページ | [`apps/homepage`](apps/homepage/) | 検定の紹介、試験日程の確認、受験者向けマイページ | 開発中 |
| 検定試験ページ | `apps/exam` | オンラインで検定試験を受験するアプリケーション | 未作成 |
| 外部 EC サイト | `apps/ec-site` | 教材・問題集などを販売する EC サイト | 未作成 |

各アプリの詳細は、それぞれのディレクトリ内の README を参照してください。

## 技術スタック

| カテゴリ | 技術 |
| --- | --- |
| フレームワーク | Next.js 15（App Router） |
| 言語 | TypeScript |
| パッケージ管理 | pnpm 10（ワークスペース） |
| スタイリング | Tailwind CSS 4 |
| Node.js | v20 以上 |

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/h-morozumi/virtual-Arithmetic-Proficiency-Test.git
cd virtual-Arithmetic-Proficiency-Test

# 依存関係のインストール
pnpm install
```

## 開発サーバーの起動

```bash
# ホームページ
pnpm run dev:homepage

# 検定試験ページ（未作成）
pnpm run dev:exam

# EC サイト（未作成）
pnpm run dev:ec-site
```

## ビルド

```bash
pnpm run build:homepage
pnpm run build:exam
pnpm run build:ec-site
```

## プロジェクト構成

```
├── AGENTS.md               # AI エージェント向け指示書
├── pnpm-workspace.yaml     # pnpm ワークスペース定義
├── package.json            # ルート package.json
└── apps/
    ├── homepage/           # ホームページ・マイページ (Next.js)
    ├── exam/               # 検定試験ページ (Next.js) ※未作成
    └── ec-site/            # 外部 EC サイト (Next.js) ※未作成
```

## ライセンス

[MIT](LICENSE)