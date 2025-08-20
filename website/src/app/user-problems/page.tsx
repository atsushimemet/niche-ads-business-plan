export default function UserProblems() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">プロダクトが解決するユーザーの課題</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">広告主が抱える課題</h2>
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">課題1: ニッチ市場へのリーチ困難</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">現状:</span> 大手広告プラットフォームでは、特定のニッチ分野に興味を持つユーザーに効率的にリーチできない</p>
                    <p><span className="font-medium">影響:</span> 広告費の無駄遣い、コンバージョン率の低下、ROIの悪化</p>
                    <p><span className="font-medium">解決策:</span> ニッチ市場に特化したターゲティング機能で、精密なユーザーセグメンテーションを実現</p>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">課題2: 高額な最低出稿金額</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">現状:</span> 既存プラットフォームの最低出稿金額が高く、小規模事業者が参入しにくい</p>
                    <p><span className="font-medium">影響:</span> 予算制約による広告機会の逸失、小規模ビジネスの成長阻害</p>
                    <p><span className="font-medium">解決策:</span> 月額1万円からの低予算でも効果的な広告配信を可能にする仕組みを提供</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">課題3: 複雑な設定・運用</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">現状:</span> 広告プラットフォームの設定が複雑で、専門知識が必要</p>
                    <p><span className="font-medium">影響:</span> 運用工数の増大、最適化の機会損失、人的リソースの負担</p>
                    <p><span className="font-medium">解決策:</span> AI による自動最適化機能と直感的なUIで、誰でも簡単に運用可能</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">メディア運営者が抱える課題</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">課題1: 収益化の困難さ</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">現状:</span> ニッチコミュニティは規模が小さく、既存の広告では収益化が困難</p>
                    <p><span className="font-medium">影響:</span> コンテンツ制作の継続困難、コミュニティ運営の経済的負担</p>
                    <p><span className="font-medium">解決策:</span> ニッチ分野に特化した高単価広告により、少ないトラフィックでも十分な収益を実現</p>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">課題2: 関連性の低い広告表示</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">現状:</span> コミュニティの特性と合わない広告が表示され、ユーザー体験が悪化</p>
                    <p><span className="font-medium">影響:</span> ユーザーエンゲージメントの低下、広告収入の減少</p>
                    <p><span className="font-medium">解決策:</span> コミュニティの特性を理解したマッチング機能で、関連性の高い広告のみを配信</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">エンドユーザーが抱える課題</h2>
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">課題1: 興味に合わない広告の表示</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">現状:</span> 一般的すぎる広告や関心のない分野の広告が頻繁に表示される</p>
                    <p><span className="font-medium">影響:</span> 広告疲れ、ユーザー体験の悪化、広告ブロッカーの使用増加</p>
                    <p><span className="font-medium">解決策:</span> ユーザーの深い興味・関心に基づいた、価値のある情報として感じられる広告を配信</p>
                  </div>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">課題2: ニッチな商品・サービスの発見困難</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">現状:</span> 自分の趣味や専門分野に関連する商品・サービスを見つけるのが困難</p>
                    <p><span className="font-medium">影響:</span> 購買機会の逸失、満足度の高い商品との出会い不足</p>
                    <p><span className="font-medium">解決策:</span> 個人の興味に完全にマッチした商品・サービスとの出会いを創出</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">市場全体の課題</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">従来の広告プラットフォームの限界</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">技術的限界</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>大規模ユーザー向けのアルゴリズム</li>
                      <li>ニッチセグメントの分析不足</li>
                      <li>画一的なターゲティング手法</li>
                      <li>小規模市場への対応不備</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">ビジネス的限界</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>大型広告主重視のビジネスモデル</li>
                      <li>最小ロット制約による参入障壁</li>
                      <li>専門性の低いサポート体制</li>
                      <li>ニッチ市場軽視の収益構造</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">課題解決によるインパクト</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">広告主</h3>
                  <div className="text-sm text-gray-600">
                    <p>ROI改善</p>
                    <p className="text-2xl font-bold text-blue-600">300%</p>
                    <p>従来比改善予想</p>
                  </div>
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">メディア運営者</h3>
                  <div className="text-sm text-gray-600">
                    <p>収益単価向上</p>
                    <p className="text-2xl font-bold text-green-600">500%</p>
                    <p>従来広告との比較</p>
                  </div>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">エンドユーザー</h3>
                  <div className="text-sm text-gray-600">
                    <p>広告満足度</p>
                    <p className="text-2xl font-bold text-purple-600">85%</p>
                    <p>目標満足度指標</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              ユーザー課題の詳細分析は
              <a 
                href="https://docs.google.com/document/d/1lO0OO1YwCuefw3Swq7zps2abjym6erhrq6-ndVDORbs/edit?tab=t.0"
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