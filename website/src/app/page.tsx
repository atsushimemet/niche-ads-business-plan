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

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">実際のプロダクト</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            現在開発・運用中のアプリケーションをご確認いただけます
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <a
              href="https://ichidan-dokusho.netlify.app/tags"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-blue-200 hover:border-blue-300"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                📚 一段読書
              </h3>
              <p className="text-blue-700 text-sm mb-3">
                読書習慣化支援アプリ
              </p>
              <span className="text-blue-600 text-sm font-medium">
                アプリを見る →
              </span>
            </a>

            <a
              href="https://euro-a-porte.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-purple-200 hover:border-purple-300"
            >
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                👔 Euro a Porte
              </h3>
              <p className="text-purple-700 text-sm mb-3">
                ユーロヴィンテージファッション
              </p>
              <span className="text-purple-600 text-sm font-medium">
                アプリを見る →
              </span>
            </a>

            <a
              href="https://arisa-p0ta.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-pink-200 hover:border-pink-300"
            >
              <h3 className="text-xl font-semibold text-pink-900 mb-3">
                🌟 Arisa
              </h3>
              <p className="text-pink-700 text-sm mb-3">
                ナイトワークキャスト検索
              </p>
              <span className="text-pink-600 text-sm font-medium">
                アプリを見る →
              </span>
            </a>

            <a
              href="https://qmgajhvb.manus.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-green-200 hover:border-green-300"
            >
              <h3 className="text-xl font-semibold text-green-900 mb-3">
                💑 Coubit
              </h3>
              <p className="text-green-700 text-sm mb-3">
                夫婦生活支援アプリ
              </p>
              <span className="text-green-600 text-sm font-medium">
                アプリを見る →
              </span>
            </a>

            <a
              href="https://kaisei.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-yellow-200 hover:border-yellow-300"
            >
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">
                🍻 KAISEI
              </h3>
              <p className="text-yellow-700 text-sm mb-3">
                飲み会幹事支援アプリ
              </p>
              <span className="text-yellow-600 text-sm font-medium">
                アプリを見る →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
