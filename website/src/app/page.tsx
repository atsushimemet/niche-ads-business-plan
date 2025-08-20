export default function Home() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Niche Ads 事業計画
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            新規事業の詳細な計画書とビジネスモデルをご覧いただけます
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/business-plan"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              事業計画詳細
            </h3>
            <p className="text-gray-600">
              事業の概要、目標、戦略について詳細にまとめた計画書です
            </p>
          </a>

          <a
            href="/business-model"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ビジネスモデル
            </h3>
            <p className="text-gray-600">
              収益構造と事業の仕組みについて説明します
            </p>
          </a>

          <a
            href="/revenue-plan"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              収益計画
            </h3>
            <p className="text-gray-600">
              事業の収益予測と財務計画について詳しく解説します
            </p>
          </a>

          <a
            href="/user-problems"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ユーザーの課題
            </h3>
            <p className="text-gray-600">
              プロダクトが解決するユーザーの課題と問題点を分析します
            </p>
          </a>

          <a
            href="/strengths"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              事業・技術的強み
            </h3>
            <p className="text-gray-600">
              当事業における競合優位性と技術的な強みについて説明します
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
