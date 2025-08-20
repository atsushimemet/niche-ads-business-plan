export default function RevenuePlan() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">収益計画</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">売上予測</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">年度</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">1年目</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">2年目</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">3年目</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">4年目</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">5年目</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">広告配信手数料</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">3,500万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">1.2億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">2.8億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">5.2億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">8.5億円</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">プレミアム機能</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">1,200万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">4,000万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">9,000万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">1.6億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">2.5億円</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">コンサルティング</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">300万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">800万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">2,000万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">3,200万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">5,000万円</td>
                    </tr>
                    <tr className="bg-blue-50 font-semibold">
                      <td className="border border-gray-300 px-4 py-2">合計売上</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">5,000万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">1.68億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">3.9億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">7億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">11億円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">コスト構造</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">固定費</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>人件費</span>
                      <span>月額1,500万円</span>
                    </div>
                    <div className="flex justify-between">
                      <span>オフィス賃料</span>
                      <span>月額200万円</span>
                    </div>
                    <div className="flex justify-between">
                      <span>システム運用費</span>
                      <span>月額300万円</span>
                    </div>
                    <div className="flex justify-between font-medium border-t pt-2">
                      <span>月額固定費計</span>
                      <span>2,000万円</span>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">変動費</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>広告配信コスト</span>
                      <span>売上の5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>決済手数料</span>
                      <span>売上の2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>マーケティング費</span>
                      <span>売上の10%</span>
                    </div>
                    <div className="flex justify-between font-medium border-t pt-2">
                      <span>変動費率計</span>
                      <span>17%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">損益予測</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">項目</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">1年目</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">2年目</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">3年目</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">4年目</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">5年目</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">売上高</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">5,000万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">1.68億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">3.9億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">7億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">11億円</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">変動費</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">850万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">2,856万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">6,630万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">1.19億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">1.87億円</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">固定費</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">2.4億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">2.4億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">2.4億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">2.4億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">2.4億円</td>
                    </tr>
                    <tr className="bg-green-50 font-semibold">
                      <td className="border border-gray-300 px-4 py-2">営業利益</td>
                      <td className="border border-gray-300 px-4 py-2 text-right text-red-600">-1.9億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right text-red-600">-8,656万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right text-green-600">8,370万円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right text-green-600">3.41億円</td>
                      <td className="border border-gray-300 px-4 py-2 text-right text-green-600">6.73億円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">資金調達計画</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">初期投資（シードラウンド）</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-2"><span className="font-medium">調達額:</span> 3億円</p>
                      <p className="text-gray-600 mb-2"><span className="font-medium">実施時期:</span> 事業開始前</p>
                      <p className="text-gray-600"><span className="font-medium">用途:</span> システム開発、人材採用、初期運転資金</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>• プロダクト開発: 1.5億円</p>
                      <p>• 人材採用: 8,000万円</p>
                      <p>• マーケティング: 5,000万円</p>
                      <p>• 運転資金: 2,000万円</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">成長資金（シリーズA）</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-2"><span className="font-medium">調達額:</span> 8億円</p>
                      <p className="text-gray-600 mb-2"><span className="font-medium">実施時期:</span> 2年目後半</p>
                      <p className="text-gray-600"><span className="font-medium">用途:</span> 事業拡大、海外展開準備</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>• 機能拡張開発: 3億円</p>
                      <p>• 営業・マーケティング強化: 3億円</p>
                      <p>• 海外展開準備: 2億円</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">KPI目標</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ユーザー獲得</h3>
                  <div className="text-2xl font-bold text-purple-600">100万人</div>
                  <div className="text-sm text-gray-500">5年目目標</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">広告主数</h3>
                  <div className="text-2xl font-bold text-orange-600">500社</div>
                  <div className="text-sm text-gray-500">5年目目標</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">営業利益率</h3>
                  <div className="text-2xl font-bold text-green-600">61%</div>
                  <div className="text-sm text-gray-500">5年目目標</div>
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              詳細な収益計画資料は
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