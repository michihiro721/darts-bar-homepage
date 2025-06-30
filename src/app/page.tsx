'use client'

import { useState, useEffect } from 'react'

interface MenuItemProps {
  name: string
  price: string
  description: string
  image: string
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  const heroImages = [
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=1080&fit=crop&crop=center'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const menuItems: MenuItemProps[] = [
    { 
      name: 'シェフ特製和牛ステーキ', 
      price: '¥4,800', 
      description: 'A5ランクの和牛を使用した贅沢なステーキコース。季節野菜のグリルと特製ソースでお楽しみください。',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center'
    },
    { 
      name: '本日の鮮魚カルパッチョ', 
      price: '¥2,200', 
      description: '市場直送の新鮮な魚を薄くスライスし、オリーブオイルとハーブで仕上げた逸品です。',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center'
    },
    { 
      name: '手打ちパスタ ウニとイクラ', 
      price: '¥3,200', 
      description: '北海道産のウニとイクラをふんだんに使用した贅沢なパスタ。手打ち麺ならではの食感をお楽しみください。',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center'
    },
    { 
      name: 'ソムリエ厳選ワイン', 
      price: '¥1,200〜', 
      description: '当店ソムリエが厳選した世界各国のワイン。お料理に最適なペアリングをご提案いたします。',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop&crop=center'
    },
    { 
      name: '季節のデザートプレート', 
      price: '¥1,500', 
      description: 'パティシエが手がける季節のフルーツを使用したデザートの盛り合わせ。美しい見た目と繊細な味わい。',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center'
    },
    { 
      name: 'スペシャルティコーヒー', 
      price: '¥800', 
      description: '焙煎士が厳選したスペシャルティグレードの豆を使用。香り高い一杯でお食事を締めくくります。',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="text-3xl font-light tracking-widest text-white">
              麗
            </div>
            
            <button
              onClick={toggleMenu}
              className="text-2xl text-white hover:text-gray-300 transition-colors p-2"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* ハンバーガーメニュー */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-40" onClick={toggleMenu}>
          <div className="fixed top-0 right-0 h-full w-96 bg-black/95 backdrop-blur-lg shadow-2xl border-l border-gray-800">
            <div className="pt-24 px-8">
              <nav className="space-y-8">
                {[
                  { name: 'ホーム', id: 'home' },
                  { name: '当店について', id: 'about' },
                  { name: 'メニュー', id: 'menu' },
                  { name: 'ギャラリー', id: 'gallery' },
                  { name: 'ご予約・お問い合わせ', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-xl font-light tracking-wide text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
              
              <div className="mt-16 space-y-4 text-gray-400 border-t border-gray-800 pt-8">
                <p className="text-sm tracking-wide">ご予約・お問い合わせ</p>
                <p className="text-lg tracking-wide">03-1234-5678</p>
                <p className="text-sm">営業時間 18:00 - 24:00</p>
                <p className="text-xs text-gray-500">定休日：日曜日・月曜日</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* メインコンテンツ */}
      <main>
        {/* ヒーローセクション - スライドショー */}
        <section id="home" className="h-screen relative overflow-hidden">
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-2000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`メイン画像 ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            ))}
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-8xl md:text-9xl font-extralight tracking-widest text-white mb-6">
                麗
              </h1>
              <p className="text-xl md:text-2xl font-light tracking-widest text-gray-200 mb-4">
                RESTAURANT REI
              </p>
              <p className="text-lg md:text-xl font-light tracking-wide text-gray-300 mb-12">
                至高の美食体験をお届けする
              </p>
              <button
                onClick={() => scrollToSection('menu')}
                className="px-12 py-4 border border-white text-white font-light tracking-widest hover:bg-white hover:text-black transition-all duration-500"
              >
                メニューを見る
              </button>
            </div>
          </div>

          {/* スライドインジケーター */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </section>

        {/* 当店についてセクション */}
        <section id="about" className="py-32 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-light tracking-widest text-white mb-8">
                  当店について
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  「麗」は、日本の美意識と西洋の調理技術を融合させた、
                  革新的なファインダイニングレストランです。
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  季節の移ろいを大切にし、厳選された食材の持つ本来の美味しさを
                  最大限に引き出すことで、忘れられない美食体験をご提供いたします。
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-12">
                  洗練された空間で、五感すべてで楽しむお食事をお楽しみください。
                </p>
                
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🌸</div>
                    <p className="text-sm tracking-wide text-gray-400">季節の食材</p>
                    <p className="text-xs text-gray-500">四季を感じる</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🍷</div>
                    <p className="text-sm tracking-wide text-gray-400">厳選ワイン</p>
                    <p className="text-xs text-gray-500">ソムリエ選定</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">👨‍🍳</div>
                    <p className="text-sm tracking-wide text-gray-400">匠の技</p>
                    <p className="text-xs text-gray-500">職人の心</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=700&fit=crop&crop=center"
                  alt="シェフが料理を準備している様子"
                  className="w-full h-96 object-cover rounded shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-sm tracking-wide">Head Chef</p>
                  <p className="text-gray-300 text-lg">田中 一郎</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* メニューセクション */}
        <section id="menu" className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-light tracking-widest text-white mb-6">
                おすすめメニュー
              </h2>
              <p className="text-xl text-gray-400 tracking-wide">
                シェフが心を込めて作る特別な一皿
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div key={index} className="group cursor-pointer bg-gray-900/30 rounded-lg overflow-hidden hover:bg-gray-900/50 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-light tracking-wide text-white">{item.name}</h3>
                      <span className="text-xl font-light text-yellow-400">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button className="px-12 py-4 border border-white text-white font-light tracking-widest hover:bg-white hover:text-black transition-all duration-500">
                詳細メニューを見る
              </button>
            </div>
          </div>
        </section>

        {/* ギャラリーセクション */}
        <section id="gallery" className="py-32 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-light tracking-widest text-white mb-20 text-center">
              ギャラリー
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop&crop=center',
                'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop&crop=center',
                'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=400&fit=crop&crop=center',
                'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=400&h=400&fit=crop&crop=center',
                'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400&h=400&fit=crop&crop=center',
                'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop&crop=center',
                'https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=400&h=400&fit=crop&crop=center',
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop&crop=center'
              ].map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded">
                  <img
                    src={image}
                    alt={`ギャラリー画像 ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className="py-32 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-light tracking-widest text-white mb-12 text-center">
              ご予約・お問い合わせ
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light tracking-wide text-white mb-4">営業時間</h3>
                  <div className="text-gray-400 space-y-2">
                    <p>火曜日 〜 土曜日</p>
                    <p className="text-xl">18:00 - 24:00</p>
                    <p className="text-sm text-red-400">定休日：日曜日・月曜日</p>
                    <p className="text-sm text-gray-500">完全予約制</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-light tracking-wide text-white mb-4">所在地</h3>
                  <div className="text-gray-400 space-y-1">
                    <p>〒150-0002</p>
                    <p>東京都渋谷区渋谷1-1-1</p>
                    <p>渋谷ヒルズ 20F</p>
                    <p className="text-sm text-gray-500 mt-2">JR渋谷駅から徒歩5分</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light tracking-wide text-white mb-4">アクセス</h3>
                  <div className="text-gray-400 text-sm space-y-1">
                    <p>・JR山手線 渋谷駅 東口から徒歩5分</p>
                    <p>・東京メトロ銀座線 渋谷駅から徒歩3分</p>
                    <p>・東急東横線 渋谷駅から徒歩4分</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/30 p-8 rounded-lg">
                <h3 className="text-2xl font-light tracking-wide text-white mb-6 text-center">ご予約</h3>
                <div className="text-center mb-8">
                  <a
                    href="tel:03-1234-5678"
                    className="inline-block px-12 py-4 border border-white text-white font-light tracking-widest hover:bg-white hover:text-black transition-all duration-500 text-xl"
                  >
                    03-1234-5678
                  </a>
                </div>
                
                <div className="space-y-4 text-gray-400 text-sm text-center">
                  <p>ご予約は前日までにお電話にてお願いいたします</p>
                  <p>キャンセルは当日の16時まで承ります</p>
                  <p className="text-xs text-gray-500">
                    アレルギーや食材の苦手なものがございましたら<br />
                    ご予約時にお知らせください
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-center text-gray-500 text-xs mb-4">フォローしてください</p>
                  <div className="flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">📷</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">📘</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">🐦</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 営業カレンダーセクション */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-light tracking-widest text-white mb-12 text-center">
              営業カレンダー
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* 2025年06月 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-blue-600 text-white text-center py-3">
                  <h3 className="text-xl font-bold">2025年06月</h3>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="py-2 px-1 text-sm">日</th>
                      <th className="py-2 px-1 text-sm">月</th>
                      <th className="py-2 px-1 text-sm">火</th>
                      <th className="py-2 px-1 text-sm">水</th>
                      <th className="py-2 px-1 text-sm">木</th>
                      <th className="py-2 px-1 text-sm">金</th>
                      <th className="py-2 px-1 text-sm">土</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>1</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">2</td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>3</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>4</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">5</td>
                      <td className="text-center py-3 border">6</td>
                      <td className="text-center py-3 border">7</td>
                    </tr>
                    <tr>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>8</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">9</td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>10</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>11</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">12</td>
                      <td className="text-center py-3 border">13</td>
                      <td className="text-center py-3 border">14</td>
                    </tr>
                    <tr>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>15</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">16</td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>17</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>18</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">19</td>
                      <td className="text-center py-3 border">20</td>
                      <td className="text-center py-3 border">21</td>
                    </tr>
                    <tr>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>22</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">23</td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>24</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>25</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">26</td>
                      <td className="text-center py-3 border">27</td>
                      <td className="text-center py-3 border">28</td>
                    </tr>
                    <tr>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>29</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">30</td>
                      <td className="text-center py-3 border"></td>
                      <td className="text-center py-3 border"></td>
                      <td className="text-center py-3 border"></td>
                      <td className="text-center py-3 border"></td>
                      <td className="text-center py-3 border"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 2025年07月 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-blue-600 text-white text-center py-3">
                  <h3 className="text-xl font-bold">2025年07月</h3>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="py-2 px-1 text-sm">日</th>
                      <th className="py-2 px-1 text-sm">月</th>
                      <th className="py-2 px-1 text-sm">火</th>
                      <th className="py-2 px-1 text-sm">水</th>
                      <th className="py-2 px-1 text-sm">木</th>
                      <th className="py-2 px-1 text-sm">金</th>
                      <th className="py-2 px-1 text-sm">土</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr>
                      <td className="text-center py-3 border"></td>
                      <td className="text-center py-3 border"></td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>1</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>2</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">3</td>
                      <td className="text-center py-3 border">4</td>
                      <td className="text-center py-3 border">5</td>
                    </tr>
                    <tr>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>6</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">7</td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>8</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>9</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">10</td>
                      <td className="text-center py-3 border">11</td>
                      <td className="text-center py-3 border">12</td>
                    </tr>
                    <tr>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>13</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">14</td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>15</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>16</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">17</td>
                      <td className="text-center py-3 border">18</td>
                      <td className="text-center py-3 border">19</td>
                    </tr>
                    <tr>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>20</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">21</td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>22</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>23</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">24</td>
                      <td className="text-center py-3 border">25</td>
                      <td className="text-center py-3 border">26</td>
                    </tr>
                    <tr>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>27</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">28</td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>29</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border bg-red-200 text-red-800">
                        <div>30</div>
                        <div className="text-xs">定休日</div>
                      </td>
                      <td className="text-center py-3 border">31</td>
                      <td className="text-center py-3 border"></td>
                      <td className="text-center py-3 border"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-center text-gray-400 mt-8 text-sm">
              ※ 赤色は定休日となっております。
            </p>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-black border-t border-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-3xl font-light tracking-widest text-white mb-4">
            麗
          </div>
          <p className="text-sm text-gray-500 tracking-wide mb-2">
            RESTAURANT REI
          </p>
          <p className="text-xs text-gray-600">
            &copy; 2025 Restaurant Rei. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}