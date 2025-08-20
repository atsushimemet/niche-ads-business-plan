export default function BusinessModel() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">ビジネスモデル</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">収益構造</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">広告配信手数料</h3>
                  <p className="text-gray-600 mb-3">
                    広告主から支払われる配信手数料の一定割合（15-20%）を収益として計上
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">収益割合:</span> 全体の70%
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">プレミアム機能</h3>
                  <p className="text-gray-600 mb-3">
                    高度なターゲティング機能や詳細なアナリティクスの月額サブスクリプション
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">収益割合:</span> 全体の25%
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">コンサルティングサービス</h3>
                <p className="text-gray-600 mb-3">
                  ニッチ市場でのマーケティング戦略立案や広告運用の専門コンサルティング
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">収益割合:</span> 全体の5%
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">バリューチェーン</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">ニッチ市場の特定・分析</h3>
                    <p className="text-gray-600">AI技術を活用した市場分析により、潜在的なニッチ市場を発見・分析</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">ユーザー獲得・セグメント化</h3>
                    <p className="text-gray-600">特定のニッチに属するユーザーを獲得し、詳細なセグメント分析を実施</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">広告主のマッチング</h3>
                    <p className="text-gray-600">ニッチ市場に興味を持つ広告主を特定し、最適なマッチングを提供</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">広告配信・最適化</h3>
                    <p className="text-gray-600">機械学習による広告配信の自動最適化で効果を最大化</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">競合優位性</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">技術的優位性</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>独自のニッチ市場分析アルゴリズム</li>
                      <li>高精度ターゲティングシステム</li>
                      <li>リアルタイム最適化エンジン</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">市場ポジション</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>ニッチ市場専門の先行者優位</li>
                      <li>小規模広告主との強固な関係</li>
                      <li>専門性の高いコンサルティング力</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">パートナーシップ戦略</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">技術パートナー</h3>
                  <p className="text-gray-600 text-sm">
                    AI・機械学習技術の専門企業との戦略的提携により、技術力の向上と開発コストの最適化を図る
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">メディアパートナー</h3>
                  <p className="text-gray-600 text-sm">
                    ニッチコミュニティを運営するメディア企業との協業により、ユーザー獲得チャネルを拡大
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">販売代理店</h3>
                  <p className="text-gray-600 text-sm">
                    地域密着型の広告代理店との連携により、全国展開とローカルマーケットへの浸透を促進
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              詳細なビジネスモデル資料は
              <a 
                href="https://docs.google.com/document/d/18n7vtWyh0QWjlIPqSU7skPWYaCUJ1-hZEq7qUaF7gZ0/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline ml-1"
              >
                こちらのGoogleドキュメント
              </a>
              でご確認いただけます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}