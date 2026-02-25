import type { StaticImageData } from "next/image";

import level10Img from "@/assets/images/levels/level-10.svg";
import level9Img from "@/assets/images/levels/level-9.svg";
import level8Img from "@/assets/images/levels/level-8.svg";
import level7Img from "@/assets/images/levels/level-7.svg";
import level6Img from "@/assets/images/levels/level-6.svg";
import level5Img from "@/assets/images/levels/level-5.svg";
import level4Img from "@/assets/images/levels/level-4.svg";

export type LevelData = {
  /** 数字のみ (例: 10, 9, …, 4) */
  id: number;
  /** 表示用 (例: "10級") */
  label: string;
  /** 対象学年 */
  target: string;
  /** 一言説明 */
  tagline: string;
  /** Tailwind グラデーション */
  color: string;
  /** イラスト画像 (static import) */
  image: StaticImageData;
  /** 出題範囲の詳細 */
  topics: string[];
  /** 試験形式 */
  format: {
    questions: number;
    duration: string;
    passing: string;
  };
  /** 学習のポイント */
  tips: string[];
};

export const levels: LevelData[] = [
  {
    id: 10,
    label: "10級",
    target: "幼児",
    tagline: "数の認識・数える力",
    color: "from-pink-500 to-rose-400",
    image: level10Img,
    topics: [
      "1〜10 までの数の読み書き",
      "ものの個数を数える",
      "数の大小比較（どちらが多い？）",
      "順番（前から何番目）",
      "簡単な仲間分け",
    ],
    format: { questions: 15, duration: "20分", passing: "70%（11問）以上" },
    tips: [
      "身のまわりのものを一緒に数えてみましょう",
      "おはじきやブロックなど実物を使った学習が効果的です",
      "数字カードで遊びながら覚えると定着しやすくなります",
    ],
  },
  {
    id: 9,
    label: "9級",
    target: "小学1年",
    tagline: "たし算・ひき算の基礎",
    color: "from-orange-500 to-amber-400",
    image: level9Img,
    topics: [
      "1桁 + 1桁 のたし算",
      "繰り上がりのないたし算",
      "1桁 − 1桁 のひき算",
      "0 のたし算・ひき算",
      "文章題（あわせていくつ・のこりはいくつ）",
    ],
    format: { questions: 20, duration: "30分", passing: "70%（14問）以上" },
    tips: [
      "指やおはじきを使って計算の仕組みを理解しましょう",
      "毎日 5 分の計算ドリルで計算スピードが上がります",
      "「あわせて」「のこりは」のキーワードに注目しましょう",
    ],
  },
  {
    id: 8,
    label: "8級",
    target: "小学2年",
    tagline: "くり上がり・くり下がり",
    color: "from-yellow-500 to-lime-400",
    image: level8Img,
    topics: [
      "2桁 + 1桁 / 2桁の繰り上がりあり",
      "2桁 − 1桁 / 2桁の繰り下がりあり",
      "3つの数のたし算・ひき算",
      "筆算の書き方と手順",
      "長さ（cm, mm）・かさ（L, dL）の単位",
    ],
    format: { questions: 20, duration: "30分", passing: "70%（14問）以上" },
    tips: [
      "筆算の位をそろえて書く習慣をつけましょう",
      "繰り上がり・繰り下がりのメモを丁寧に書きましょう",
      "単位の換算は表にまとめると覚えやすくなります",
    ],
  },
  {
    id: 7,
    label: "7級",
    target: "小学3年",
    tagline: "かけ算・わり算の基礎",
    color: "from-emerald-500 to-teal-400",
    image: level7Img,
    topics: [
      "九九の完全習得",
      "2桁 × 1桁 の筆算",
      "あまりのあるわり算",
      "□を使った式（逆算）",
      "時刻と時間の計算",
    ],
    format: { questions: 20, duration: "40分", passing: "70%（14問）以上" },
    tips: [
      "九九は声に出して繰り返し練習しましょう",
      "わり算はかけ算の逆と考えるとスムーズです",
      "時計を見ながら「あと何分？」と考える練習をしましょう",
    ],
  },
  {
    id: 6,
    label: "6級",
    target: "小学4年",
    tagline: "小数・分数の基礎",
    color: "from-cyan-500 to-sky-400",
    image: level6Img,
    topics: [
      "小数のたし算・ひき算",
      "分数のたし算・ひき算（同分母）",
      "小数と分数の関係",
      "がい数（四捨五入）",
      "角度と三角形・四角形の性質",
    ],
    format: { questions: 25, duration: "40分", passing: "70%（18問）以上" },
    tips: [
      "小数点の位置に注意して筆算しましょう",
      "分数は図（円・テープ図）で視覚的に理解しましょう",
      "分度器を使って角度を測る練習を重ねましょう",
    ],
  },
  {
    id: 5,
    label: "5級",
    target: "小学5年",
    tagline: "割合・図形の面積",
    color: "from-blue-500 to-indigo-400",
    image: level5Img,
    topics: [
      "割合（百分率・歩合）",
      "帯グラフ・円グラフの読み取り",
      "三角形・平行四辺形・台形の面積",
      "異分母分数のたし算・ひき算",
      "平均の求め方",
    ],
    format: { questions: 25, duration: "50分", passing: "70%（18問）以上" },
    tips: [
      "「もとにする量 × 割合 = くらべる量」を式で整理しましょう",
      "面積公式はまず図を描いて確認する癖をつけましょう",
      "通分のやり方を確実にしてから計算に進みましょう",
    ],
  },
  {
    id: 4,
    label: "4級",
    target: "小学6年",
    tagline: "比・速さ・体積",
    color: "from-violet-500 to-purple-400",
    image: level4Img,
    topics: [
      "比と比の値",
      "速さ・時間・道のりの関係",
      "円の面積・円周",
      "角柱・円柱の体積",
      "比例と反比例",
      "場合の数",
    ],
    format: { questions: 30, duration: "50分", passing: "70%（21問）以上" },
    tips: [
      "速さの公式は「は・じ・き」の図で整理しましょう",
      "体積は底面積 × 高さの関係を意識しましょう",
      "比例・反比例はグラフと式の両方で確認しましょう",
    ],
  },
];

/** id から LevelData を取得 */
export function getLevelById(id: number): LevelData | undefined {
  return levels.find((l) => l.id === id);
}
