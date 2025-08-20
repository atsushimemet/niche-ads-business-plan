export default function BusinessPlan() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">事業計画詳細</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">事業概要</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  本事業は、特定のニッチ市場に特化した広告配信プラットフォームの開発・運営を行います。
                  従来の広告プラットフォームでは対応が困難だった小規模・特化型の市場に焦点を当て、
                  高い精度でターゲティングを行うことで、広告主と消費者双方に価値を提供します。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">事業目標</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">短期目標（1年以内）</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>プラットフォームのベータ版リリース</li>
                    <li>10社以上の広告主との契約獲得</li>
                    <li>月間売上高500万円達成</li>
                    <li>ユーザー基盤10万人の構築</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">長期目標（3年以内）</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>業界シェア15%の獲得</li>
                    <li>年間売上高10億円達成</li>
                    <li>海外展開の開始</li>
                    <li>AI機能の高度化実現</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">市場分析</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">市場規模と成長性</h3>
                <p className="text-gray-600 mb-4">
                  ニッチ広告市場は年々拡大傾向にあり、特に以下の分野での成長が期待されています：
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>趣味・嗜好特化型コミュニティ</li>
                  <li>専門職向けサービス</li>
                  <li>地域密着型ビジネス</li>
                  <li>B2B専門サービス</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">戦略と実行計画</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">フェーズ1: 基盤構築</h3>
                  <p className="text-gray-600">
                    プラットフォームの技術基盤を構築し、初期のパートナー企業との関係を築きます。
                    機械学習アルゴリズムの開発とデータ収集基盤の整備を行います。
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">フェーズ2: 市場拡大</h3>
                  <p className="text-gray-600">
                    ベータテストの結果を基にプロダクトを改善し、本格的な市場展開を開始します。
                    マーケティング活動を強化し、ブランド認知度を向上させます。
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">フェーズ3: スケール拡大</h3>
                  <p className="text-gray-600">
                    安定した収益基盤を確立し、新機能の開発と海外展開を検討します。
                    戦略的パートナーシップの構築とM&Aの可能性も探ります。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">リスク分析</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">主要リスクと対策</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">技術リスク</h4>
                    <p className="text-gray-600 text-sm">
                      対策: 経験豊富な開発チームの確保、外部技術パートナーとの連携
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">競合リスク</h4>
                    <p className="text-gray-600 text-sm">
                      対策: 独自性の高い機能開発、特許申請、先行者優位の確立
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">資金調達リスク</h4>
                    <p className="text-gray-600 text-sm">
                      対策: 複数の資金調達チャネルの確保、段階的な事業拡大
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              詳細な事業計画書は
              <a 
                href="https://docs.google.com/document/d/1uScajTRA2CQrhscmaDx44oyM0H9eTVVz3RYVY3Xbij0/edit?tab=t.3p7vr48jmubf"
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