export default function BusinessPlan() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">事業計画（詳細）</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">概要</h2>
              <div className="prose prose-lg text-gray-600 mb-6">
                <p>
                  本事業は、ニッチ領域に特化した複数のWebメディア／アプリケーションを立ち上げ、それぞれの領域でユーザー体験を支援しつつ、一定規模のユーザー基盤を獲得後に広告枠販売によって収益化を図るモデルである。
                </p>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">開発中の5プロダクト</h3>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">📚 一段読書</h4>
                    <a
                      href="https://ichidan-dokusho.netlify.app/tags"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      アプリを見る →
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm">
                    読書好き、あるいはこれから読書を習慣にしたい層に向け、選書から読書場所探し、読後メモや知識整理までをワンストップで提供するメディアサービス。
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">👔 Euro a Porte</h4>
                    <a
                      href="https://euro-a-porte.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                    >
                      アプリを見る →
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm">
                    ユーロヴィンテージファッションを好む層に向け、店舗紹介や歴史的文脈を交えたストーリーテリングを通じて体験を提供するメディアサービス。
                  </p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">🌟 Arisa</h4>
                    <a
                      href="https://arisa-p0ta.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 text-sm font-medium"
                    >
                      アプリを見る →
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm">
                    ナイトワーク領域におけるキャスト選定を支援し、利用者が事前に候補を比較・検討できるメディアサービス。
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">💑 Coubit</h4>
                    <a
                      href="https://qmgajhvb.manus.space/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 text-sm font-medium"
                    >
                      アプリを見る →
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm">
                    夫婦の日常生活における小さな齟齬を解決するマイクロサービス群。例外的にクレジットカード訴求を中心とするが、夫婦向け広告主が存在する場合には従量課金型広告枠を販売する。
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg col-span-full lg:col-span-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">🍻 KAISEI</h4>
                    <a
                      href="https://kaisei.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-600 hover:text-yellow-800 text-sm font-medium"
                    >
                      アプリを見る →
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm">
                    飲み会の幹事を支援するマイクロサービス群。傾斜配分や二次会場所選びといった小規模課題を解決する。
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">共通収益モデル</h4>
                <p className="text-gray-600 mb-3">
                  全プロダクト共通で「従量課金型の広告掲載枠」を設置。MAU1万到達後に広告販売を開始し、SNS埋め込み（Instagram／X／TikTok）を広告フォーマットとして提供する。
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>📱 SNS埋め込み広告</span>
                  <span>💰 従量課金制（PV×単価）</span>
                  <span>🎯 ニッチターゲティング</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">背景</h2>
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">従来の広告プラットフォームの課題</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Web広告市場はGoogleやMetaといった大手プラットフォームが支配してきた。リクルートも「オーディエンスが明確なWebサービス」に対しては広告市場を担ってきたが、新規事業においては年間100億円規模に満たない市場は切り捨てられる傾向があり、ニッチ市場には十分な広告マッチングの仕組みが提供されてこなかった。
                    </p>
                    <p>
                      Googleリスティング広告やMeta広告は一定の解決策を提供してきたが、「誰に広告を届けているか」という解像度がクライアントに伝わりにくく、さらに詳細なオーディエンス設定を行えば解像度は上がるが、その設定自体が広告主の負担となっていた。
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">本事業のアプローチ</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      オーディエンスが明確なWebサービス／アプリケーションを提供し、PV数×単価というシンプルかつ透明な従量課金型モデルを導入する。さらにSNS埋め込み広告を採用し、広告主は既存の投稿を流用可能、入稿はLINE、決済はPayPayで完結する設計により、広告出稿の負担を最小化する。
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-white p-3 rounded text-center">
                        <div className="font-semibold text-blue-600">シンプル課金</div>
                        <div className="text-sm">PV数×10円</div>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="font-semibold text-blue-600">簡単入稿</div>
                        <div className="text-sm">LINE完結</div>
                      </div>
                      <div className="bg-white p-3 rounded text-center">
                        <div className="font-semibold text-blue-600">ライト決済</div>
                        <div className="text-sm">PayPay対応</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">AI活用による開発効率化</h3>
                  <p className="text-gray-600">
                    AIソリューションを利用し効率性を追求。戦略策定や要求定義をChatGPTで実施し、CursorやClaudeを用いた実装・テスト、さらにVercelやSupabaseでの即時デプロイを行っている。これにより従来の数分の一の開発期間とコストでMVP構築が可能となり、複数サービスの同時立ち上げを現実的にしている。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">収益計画（一段読書を例に）</h2>
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">収益化の起点</h3>
                  <p className="text-gray-600 mb-3">
                    一段読書の収益計画は、Webサービス／アプリケーションでの<strong>MAU1万到達を起点</strong>に開始する。
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-gray-800 mb-2">サービス設計</h4>
                    <p className="text-gray-600 text-sm">
                      「本を選ぶ」「読む場所を探す」だけでなく、読後メモ機能や知識整理（アウトプット）機能、さらに独自のレコメンド機能を通じて学習体験を支援する。
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">広告収益モデル</h3>
                  <p className="text-gray-600 mb-4">
                    店舗ページの<strong>PV数×10円</strong>の従量課金。多数の小規模店舗(本を探すための本屋/読むための喫茶店/バー)を取り込み、薄利多売的に広告主を積み上げる。
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded text-center">
                      <div className="text-lg font-bold text-green-600">月間1000PV</div>
                      <div className="text-sm text-gray-600">= 1万円</div>
                    </div>
                    <div className="bg-white p-4 rounded text-center">
                      <div className="text-lg font-bold text-green-600">月間5000PV</div>
                      <div className="text-sm text-gray-600">= 5万円</div>
                    </div>
                    <div className="bg-white p-4 rounded text-center">
                      <div className="text-lg font-bold text-green-600">薄利多売</div>
                      <div className="text-sm text-gray-600">小規模店舗積み上げ</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">市場規模の根拠</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">出版・書店市場</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 出版市場：約<strong>1兆2000億円</strong>（出版科学研究所）</li>
                        <li>• 書店：約<strong>1万店舗</strong>（全国）</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">カフェ・バー市場</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• カフェ市場：約<strong>1兆円</strong>（外食産業統計）</li>
                        <li>• バー市場：約<strong>3万店舗</strong>（推計値）</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">収益試算例</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">店舗数</th>
                          <th className="text-right py-2">月間収益</th>
                          <th className="text-right py-2">年間収益</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-b">
                          <td className="py-2">10件（1000PV/件）</td>
                          <td className="text-right py-2">10万円</td>
                          <td className="text-right py-2">120万円</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">30件</td>
                          <td className="text-right py-2">30万円</td>
                          <td className="text-right py-2 font-semibold">360万円</td>
                        </tr>
                        <tr>
                          <td className="py-2">50件</td>
                          <td className="text-right py-2">50万円</td>
                          <td className="text-right py-2 font-semibold">600万円</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    初期は控えめに進めるが、拡張可能性は高く、<strong>数千万円規模の収益潜在力</strong>を持つ。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">共通広告掲載基盤の開発について</h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  5プロダクト（一段読書、Euro a Porte、Arisa、Coubit、KAISEI）は、各市場やユーザー層は異なるが、収益モデルはいずれも「従量課金型の広告掲載枠提供」に統一している。そのため、個別にシステムを構築するのではなく、共通の広告掲載基盤を開発し、全プロダクトで活用する計画である。
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">📱 広告フォーマット統一</h4>
                    <p className="text-gray-600 text-sm">SNS埋め込み（Instagram／X／TikTok）を標準化。</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">⚡ 入稿フローの効率化</h4>
                    <p className="text-gray-600 text-sm">LINEを用いた入稿システムを整備し、小規模事業者でも容易に広告掲載可能。</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">💳 決済の簡素化</h4>
                    <p className="text-gray-600 text-sm">PayPayなどライトな決済手段に対応し、取引コストを最小化。</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">💰 従量課金の共通化</h4>
                    <p className="text-gray-600 text-sm">PV数×10円をベースに一貫した請求体系を提供。</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">プロジェクトのスケジュール</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900">① MVP開発とAIエージェント活用プロセス確立</h3>
                  <div className="text-sm text-gray-500 mb-2">2025年6月 〜 2025年8月</div>
                  <p className="text-gray-600 text-sm">
                    ChatGPTやClaude、Cursorを活用し、要求定義・実装・テスト・デプロイを高速化。クラウド基盤を利用し、開発コストを最小化。
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900">② 初期ユーザー獲得フェーズ</h3>
                  <div className="text-sm text-gray-500 mb-2">2025年9月 〜 2025年12月</div>
                  <p className="text-gray-600 text-sm">
                    MVP公開後、SNSアカウントを起点に初期ユーザーを獲得。利用者の声を集め、サービス定着を図る。
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900">③ グロースフェーズ（MAU1万到達前）</h3>
                  <div className="text-sm text-gray-500 mb-2">2026年1月 〜 2026年6月</div>
                  <p className="text-gray-600 text-sm">
                    ユーザーフィードバックを反映し、数千MAU規模まで拡大。SEO・SNS運用を強化し、リテンション重視で成長基盤を築く。
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900">④ MAU1万到達（Webサービス／アプリケーション）</h3>
                  <div className="text-sm text-gray-500 mb-2">2026年7月 〜 2026年9月</div>
                  <p className="text-gray-600 text-sm">
                    各サービスでMAU1万を達成。市場適合性を実証し、広告営業の条件を整備。
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900">⑤ 共通広告掲載基盤の開発</h3>
                  <div className="text-sm text-gray-500 mb-2">2026年10月 〜 2026年12月</div>
                  <p className="text-gray-600 text-sm">
                    LINE・PayPayを利用した小規模事業者向け広告入稿システムを構築。マイルストーンとして明確に設定し、横断的収益化を支える。
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900">⑥ 初期クライアント獲得</h3>
                  <div className="text-sm text-gray-500 mb-2">2027年1月 〜 2027年3月</div>
                  <p className="text-gray-600 text-sm">
                    書店・カフェ・ブックバー、ユーロヴィンテージ店舗、ナイトワークキャスト、夫婦支援事業者など、多様な広告主との契約を開始。
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900">⑦ 収益グロースフェーズ</h3>
                  <div className="text-sm text-gray-500 mb-2">2027年4月 〜 2027年12月</div>
                  <p className="text-gray-600 text-sm">
                    薄利多売型で広告主を積み上げ、各サービスを横展開。事業全体で収益基盤を強化する。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">実行者について</h2>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">経歴・実績</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <p><strong>株式会社リクルート</strong>：特定領域のデータサイエンスチームリードを務め、プロダクト戦略立案・実装・分析基盤構築を推進</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <p><strong>ALBERT株式会社（現アクセンチュア傘下）</strong>：AIアルゴリズム開発を担当</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <p><strong>個人実績</strong>：ヴィンテージファッションメディア「Vooktokyo」を運営し、SNSフォロワー1万人、月間サイトMAU3000を達成</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded border-l-4 border-indigo-500">
                  <p className="text-gray-600 text-sm">
                    こうした実績から、ニッチ市場のユーザー獲得・分析・成長戦略の遂行に強みを持ち、事業遂行に必要な知見を備えている。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">まとめ</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  本事業は、ニッチ市場において「ユーザー体験を支援するWebサービス」と「従量課金型広告モデル」を組み合わせ、従来は収益化が難しかった領域に新たな広告機会を提供する。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">🚀 開発効率化</h4>
                    <p className="text-gray-600 text-sm">AIエージェントを活用した開発効率化により、複数サービスを同時並行で立ち上げ、低コストで検証サイクルを回す。</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">📊 明確な指標</h4>
                    <p className="text-gray-600 text-sm">MAU1万という明確な到達点を区切りに、広告収益化を段階的に進める。</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">💡 独自の強み</h4>
                    <p className="text-gray-600 text-sm">SNS埋め込み広告とシンプルな課金体系、小規模事業者に最適化された入稿フローを強みとする。</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-800 mb-2">🎯 横断的収益</h4>
                    <p className="text-gray-600 text-sm">各プロダクトは独自の市場で価値を発揮しつつ、共通基盤によって収益性を拡大していく。</p>
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
