export default function BusinessModel() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">ビジネスモデル</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. 本事業の基本構造</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-gray-600 mb-4">
                  本事業の収益は、<strong>従量課金型の広告掲載</strong>に依存しています。
                  各プロダクト（読書、ナイトキャスト、幹事、夫婦、ユーロヴィンテージ）で集めたユーザーを、関連する店舗や事業者の「広告主」とマッチングさせる仕組みです。
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-600 mb-2">👥 ユーザー</h4>
                    <p className="text-gray-600 text-sm">サービスを利用して課題を解決（例：読書場所探し、幹事の店探しなど）</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-600 mb-2">🏪 広告主</h4>
                    <p className="text-gray-600 text-sm">ユーザーにリーチし、自店舗やサービスを訴求</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-purple-600 mb-2">⚙️ 運営</h4>
                    <p className="text-gray-600 text-sm">PV数に応じて広告費を従量課金で徴収</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  このように、<strong>ユーザーと広告主を橋渡しするプラットフォーム構造</strong>を取ります。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. 従量課金広告とは？</h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    従量課金広告とは、広告が<strong>「どれだけ見られたか（PV数）」「どれだけ利用されたか」</strong>に応じて料金が発生する仕組みです。
                    例えるなら、水道や電気と同じで<strong>「使った分だけ支払う」</strong>モデルです。
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded border-l-4 border-green-500">
                      <div className="font-semibold text-green-600">100回見られたら</div>
                      <div className="text-gray-600 text-sm">100回分の料金</div>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-green-500">
                      <div className="font-semibold text-green-600">1000回見られたら</div>
                      <div className="text-gray-600 text-sm">1000回分の料金</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">本事業での課金ルール</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold text-yellow-700">課金単価：</span>
                      <span className="text-2xl font-bold text-yellow-600">1PV = 10円</span>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                      <div className="font-medium">例：店舗ページが月間1000PV</div>
                      <div className="text-lg">→ 1000 × 10円 = <span className="font-bold text-yellow-600">1万円</span></div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      シンプルで分かりやすく、費用対効果を広告主が直感的に把握できます。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. 入稿と決済を簡単にする仕組み</h2>
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">従来の課題</h3>
                  <p className="text-gray-600">
                    従来の広告出稿は「専用管理画面の操作」「複雑な入稿設定」「請求書払い」がハードルになっていました。
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">本事業の解決策</h3>
                  <p className="text-gray-600 mb-4">
                    そこで本事業では<strong>LINE × PayPay</strong>を利用し、小規模事業者でも簡単に広告を出せるように設計しています。
                  </p>
                  
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-blue-600 mb-2">📱 広告入稿：LINEから送信</h4>
                      <p className="text-gray-600 text-sm">
                        → 広告主は普段使い慣れているLINEで、文章や画像を送るだけで広告入稿可能
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-blue-600 mb-2">💳 決済：PayPay支払い</h4>
                      <p className="text-gray-600 text-sm">
                        → 入稿後にLINE上でPayPay決済すれば即時広告掲載がスタート
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-blue-600 mb-2">📊 利用量に応じた請求</h4>
                      <p className="text-gray-600 text-sm">
                        → 「店舗ページのPV数 × 10円」をベースに月ごとに自動精算
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-gray-600 font-medium">
                    これにより、<strong>誰でも直感的に広告出稿を始められる環境</strong>を整えます。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. リクルートの「リボンモデル」との関係</h2>
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    本事業の収益モデルは、<strong>リクルートが長年採用してきた「リボンモデル」</strong>を参考にしています。
                  </p>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-semibold text-gray-800 mb-2">リボンモデルとは？</h4>
                    <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                      <li>中央にプラットフォームがあり、左右に「ユーザー」と「クライアント（広告主）」が配置される構造。</li>
                      <li>例：SUUMO（家探し）、ホットペッパー（飲食）、ゼクシィ（結婚）など。</li>
                      <li>ユーザーが情報を探す → クライアントは掲載料を支払って訴求 → プラットフォームが双方をつなぐ。</li>
                      <li>結果として「ユーザー数が増えるほどクライアント価値が上がる」「クライアントが増えるほどユーザーに情報が集まる」という<strong>双方向の循環（リボン型の循環）</strong>が生まれる。</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">本事業への適用</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded text-center">
                      <h4 className="font-semibold text-orange-600 mb-2">👥 ユーザー側</h4>
                      <p className="text-gray-600 text-sm">読書好き、幹事、夫婦、ナイトワーク利用者、ファッション愛好家など</p>
                    </div>
                    <div className="bg-white p-4 rounded text-center">
                      <h4 className="font-semibold text-orange-600 mb-2">⚙️ 中央（プラットフォーム）</h4>
                      <p className="text-gray-600 text-sm">本事業が提供する5プロダクト</p>
                    </div>
                    <div className="bg-white p-4 rounded text-center">
                      <h4 className="font-semibold text-orange-600 mb-2">🏪 クライアント側</h4>
                      <p className="text-gray-600 text-sm">書店、カフェ、ブックバー、ユーロヴィンテージ店舗、ナイトキャスト紹介店舗、夫婦支援サービスなど</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">
                    <strong>従量課金モデルとリボンモデルを掛け合わせることで、ニッチ市場でも持続的な成長サイクルを実現します。</strong>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. まとめ</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                    <div>
                      <p className="text-gray-600">
                        本事業は<strong>PV数 × 10円の従量課金広告</strong>を基本とし、広告主がわかりやすく利用できる設計。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                    <div>
                      <p className="text-gray-600">
                        <strong>LINE入稿 × PayPay決済</strong>によって入稿・決済のハードルを下げ、小規模事業者でも導入可能。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                    <div>
                      <p className="text-gray-600">
                        リクルートの<strong>「リボンモデル」</strong>を応用し、ユーザーと広告主の双方を拡大させる循環型プラットフォームを構築。
                      </p>
                    </div>
                  </div>
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