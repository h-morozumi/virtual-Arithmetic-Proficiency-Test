type Props = {
  message?: string;
};

/** 全画面中央にメッセージを表示するプレゼンテーショナルコンポーネント */
export default function FullScreenMessage({
  message = "読み込み中…",
}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center" role="status" aria-live="polite">
      <div className="text-placeholder">{message}</div>
    </div>
  );
}
