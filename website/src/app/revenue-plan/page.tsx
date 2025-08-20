export default function RevenuePlan() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">収益計画（5プロダクト運用前提）</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">収益目標</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-blue-600 mb-2">年間売上 3.6億円</div>
                  <p className="text-gray-600">を目標とする</p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-800 mb-3">達成式</h3>
                  <div className="text-lg font-mono text-gray-700 break-all">
                    クライアントページ <span className="text-blue-600 font-bold">1万MAU/月</span> × <span className="text-green-600 font-bold">10円/AU/月</span> × <span className="text-purple-600 font-bold">300クライアント/月</span> × <span className="text-orange-600 font-bold">12ヶ月</span> ＝ <span className="text-red-600 font-bold">3.6億円/年</span>
                  </div>
                </div>
                
                <div className="mt-4 bg-gray-50 p-4 rounded">
                  <p className="text-gray-600 text-sm">
                    ここでいう「クライアントページ」とは広告主が出稿する掲載ページを指し、サイト全体MAUの10%が当該ページに流入する設計を前提としている。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ビジネスモデル</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    本事業の収益モデルは、5プロダクト（読書／ナイトキャスト／幹事／夫婦／ユーロヴィンテージ）に共通して<strong>「従量課金型広告枠の販売」</strong>に統一している。
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-600 mb-2">💰 課金体系</h4>
                      <p className="text-gray-600 text-sm">クライアントページの訪問1AUあたり10円を課金。</p>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-600 mb-2">📱 広告フォーマット</h4>
                      <p className="text-gray-600 text-sm">SNS埋め込み（Instagram／X／TikTok）を標準化。</p>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-600 mb-2">⚡ 入稿フロー</h4>
                      <p className="text-gray-600 text-sm">LINEによる入稿システムを整備し、クライアントは既存の投稿をそのまま流用可能。</p>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-600 mb-2">💳 決済方法</h4>
                      <p className="text-gray-600 text-sm">PayPayなど即時性のあるライト決済に対応。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="font-semibold text-yellow-700">収益化条件：</span>
                    <span className="text-yellow-600 font-bold">各プロダクトがMAU1万を達成後、広告販売を本格的に開始。</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    このシンプルな従量課金モデルにより、広告主は「PV数＝請求金額」を直感的に理解でき、小規模事業者や地域密着型店舗でも導入しやすい設計となっている。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">各プロダクトの市場規模とMAUポテンシャル</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  5つのプロダクトはいずれも十分な市場規模を背景にMAU1万を達成できるポテンシャルを有する。
                </p>
                
                <div className="grid md:grid-cols-1 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">📚 一段読書（読書領域）</h4>
                    <p className="text-gray-600 text-sm">
                      国内の読書人口は約<strong>3,000万人</strong>（文化庁調査）。1万MAUは0.03%程度の獲得で実現可能。
                    </p>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-600 mb-2">🌟 Arisa（ナイトワークキャスト領域）</h4>
                    <p className="text-gray-600 text-sm">
                      全国キャバクラ・クラブ従業員数は約<strong>20万人</strong>、利用者は<strong>数百万人規模</strong>。1万MAUは容易に到達可能。
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-600 mb-2">🍻 KAISEI（飲み会幹事支援）</h4>
                    <p className="text-gray-600 text-sm">
                      飲み会開催経験者は約<strong>4,000万人</strong>、そのうち幹事経験者は約<strong>1,000万人規模</strong>。ニッチシェアで1万MAU達成可能。
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">💑 Coubit（夫婦領域）</h4>
                    <p className="text-gray-600 text-sm">
                      国内に約<strong>2,000万世帯</strong>の夫婦世帯が存在。利用意向1%で20万世帯に相当し、1万MAUは十分に射程内。
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600 mb-2">👔 Euro a Porte（ユーロヴィンテージ領域）</h4>
                    <p className="text-gray-600 text-sm">
                      国内ファッションEC利用者は約<strong>5,000万人</strong>。ヴィンテージ市場規模は約<strong>3,000億円</strong>、1%でも30万人規模となり、1万MAUは現実的。
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 font-medium text-center">
                    結論として、全プロダクトにおいて<strong>1万MAU/月</strong>の獲得は市場規模的に十分達成可能である。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">集客施策とコスト試算</h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  集客の中心は<strong>Paid Search</strong>とし、過去実績では1ヶ月6,000円で1,000AU獲得できている。
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-orange-500 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">効率試算</h4>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <div>• 60万円でサイト全体へ10万MAUを獲得可能</div>
                    <div>• クライアントページへの訪問率は10%と見込み</div>
                    <div>• MAU10万人 → 1万MAUが広告主ページに流入</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded text-center">
                    <h4 className="font-semibold text-orange-600 mb-2">各プロダクト</h4>
                    <div className="text-lg font-bold">月60万円</div>
                    <div className="text-sm text-gray-600">年720万円</div>
                  </div>
                  <div className="bg-white p-4 rounded text-center">
                    <h4 className="font-semibold text-orange-600 mb-2">5プロダクト合計</h4>
                    <div className="text-lg font-bold">年3,600万円規模</div>
                    <div className="text-sm text-gray-600">現実的な水準</div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">シナリオ別収益計画</h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  収益計画は楽観・中庸・悲観の3シナリオで試算する。
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">🟢 楽観シナリオ</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• 全5プロダクトが計画通りMAU1万を達成し、300クライアントを獲得</p>
                    <p>• <strong>年間売上：3.6億円</strong></p>
                    <p>• 広告費効率も維持され、高利益率を確保できる</p>
                  </div>
                  <div className="mt-3 bg-white p-3 rounded">
                    <span className="text-sm text-gray-500">利益試算：</span>
                    <span className="font-semibold text-green-600">売上3.6億円 - 広告費3,600万円 - 運営費1,200万円 = 営業利益3.24億円（利益率90%）</span>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h3 className="text-xl font-semibold text-yellow-600 mb-3">🟡 中庸シナリオ</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• 5プロダクトのうち3プロダクトがMAU1万を達成、2プロダクトはMAU5000に留まる</p>
                    <p>• クライアント数は合計200社規模となり、<strong>年間売上：約2.28億円</strong></p>
                    <p>• 広告費は十分に回収可能であり、事業として成立水準に到達する</p>
                  </div>
                  <div className="mt-3 bg-white p-3 rounded">
                    <span className="text-sm text-gray-500">利益試算：</span>
                    <span className="font-semibold text-yellow-600">売上2.28億円 - 広告費2,400万円 - 運営費1,200万円 = 営業利益1.92億円（利益率84%）</span>
                  </div>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">🔴 悲観シナリオ</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>• 全5プロダクトのうち1プロダクトがMAU5000に留まり、150クライアント規模</p>
                    <p>• <strong>年間売上：約0.9億円</strong></p>
                    <p>• 売上は縮小するが、開発コストを最小化した設計と従量課金モデルによって赤字リスクは抑制される</p>
                  </div>
                  <div className="mt-3 bg-white p-3 rounded">
                    <span className="text-sm text-gray-500">利益試算：</span>
                    <span className="font-semibold text-red-600">売上0.9億円 - 広告費1,800万円 - 運営費1,200万円 = 営業利益6,000万円（利益率67%）</span>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">📊 シナリオ比較表</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">シナリオ</th>
                          <th className="text-right py-2">売上</th>
                          <th className="text-right py-2">営業利益</th>
                          <th className="text-right py-2">利益率</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-b">
                          <td className="py-2">楽観</td>
                          <td className="text-right py-2 font-semibold">3.6億円</td>
                          <td className="text-right py-2 text-green-600 font-semibold">3.24億円</td>
                          <td className="text-right py-2">90%</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">中庸</td>
                          <td className="text-right py-2 font-semibold">2.28億円</td>
                          <td className="text-right py-2 text-yellow-600 font-semibold">1.92億円</td>
                          <td className="text-right py-2">84%</td>
                        </tr>
                        <tr>
                          <td className="py-2">悲観</td>
                          <td className="text-right py-2 font-semibold">0.9億円</td>
                          <td className="text-right py-2 text-red-600 font-semibold">0.6億円</td>
                          <td className="text-right py-2">67%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">キャッシュフロー計画</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">💰 初期投資</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">開発ツール利用料</h4>
                      <p className="text-gray-600 text-sm">ChatGPT / Cursor / Claude / Vercel / Render</p>
                      <p className="font-semibold text-blue-600">月1.5万円、年間18万円</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">広告基盤開発費用</h4>
                      <p className="text-gray-600 text-sm">入金確認後に自動で広告掲載が開始される仕組みを含む</p>
                      <p className="font-semibold text-blue-600">30万円</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-xl font-bold text-blue-600">合計48万円</span>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-600 mb-3">🔄 運転資金</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">人件費（1人）</span>
                      <span className="font-semibold text-orange-600">年1,000万円</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Paid Search（5プロダクト）</span>
                      <span className="font-semibold text-orange-600">年3,600万円</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">法務・会計など雑費</span>
                      <span className="font-semibold text-orange-600">年200万円</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between items-center">
                      <span className="font-medium text-gray-800">運転資金合計（広告費除く）</span>
                      <span className="text-xl font-bold text-orange-600">年1,200万円</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">💸 回収設計</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                      <p>クライアント入金確認後に広告掲載を開始する設計で、入金は即時</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                      <p>与信リスクを最小化でき、資金繰りリスクはほぼ存在しない</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">まとめ</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  本収益計画は、ニッチ市場に特化した5プロダクトの同時運用を前提に、年間3.6億円の売上を目指すものである。
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                    <p className="text-gray-600">各プロダクトは市場規模的に十分にMAU1万を達成可能であり、Paid Searchによる効率的な集客で広告投資を抑えつつユーザー基盤を確保できる。</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                    <p className="text-gray-600">収益シナリオは楽観で3.6億円、中庸で2.28億円、悲観でも0.9億円と、いずれも事業成立性を担保している。</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                    <p className="text-gray-600">さらに開発コストを最小化し、即時入金モデルを採用することでキャッシュフローリスクを極小化しており、堅牢かつ拡張性の高いビジネスモデルである。</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              詳細な収益計画資料は
              <a 
                href="https://docs.google.com/document/d/18w-vpg2KQK8ntcRtjTTmKrm-plYocdchb3Dvo29eBEA/edit?tab=t.44cv02kub7w4"
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
