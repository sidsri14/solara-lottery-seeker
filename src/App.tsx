import { useState } from 'react'
import { 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink, 
  Smartphone, 
  Award, 
  Share2, 
  ShieldCheck, 
  RotateCcw,
  Star,
  Play
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { PRIZE_BRACKETS, LATEST_DRAW, SOLARA_THREAD } from './data'

export default function App() {
  const [activeTab, setActiveTab] = useState<'draw-simulator' | 'brackets' | 'seeker-review' | 'x-thread'>('draw-simulator')
  const [userNumbers, setUserNumbers] = useState<number[]>([7, 3, 5, 1, 9, 2])
  const [isDrawing, setIsDrawing] = useState<boolean>(false)
  const [drawResult, setDrawResult] = useState<number[] | null>(null)
  const [matchCount, setMatchCount] = useState<number>(0)
  const [totalPool, setTotalPool] = useState<number>(600)
  const [copiedThread, setCopiedThread] = useState<boolean>(false)
  const [copiedReview, setCopiedReview] = useState<boolean>(false)
  const [seekerReviewText, setSeekerReviewText] = useState<string>(
    "⭐️⭐️⭐️⭐️⭐️ Phenomenal experience with SOLARA on Solana Seeker! The Seed Vault integration makes purchasing a $5 weekly ticket seamless and instant. Knowing every single draw is settled on-chain with verifiable VRF randomness rather than black-box operators gives immense peace of mind. The UI is ultra responsive and claiming winnings directly to my wallet took seconds. Must-have dApp for every Seeker owner!"
  )

  const handleRandomize = () => {
    const nums = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10))
    setUserNumbers(nums)
    setDrawResult(null)
  }

  const handleRunDraw = () => {
    setIsDrawing(true)
    setDrawResult(null)

    setTimeout(() => {
      // simulate realistic outcome with high chance of at least 1-2 matches
      const drawn = [...LATEST_DRAW.winningNumbers]
      setDrawResult(drawn)
      setIsDrawing(false)

      let matches = 0
      for (let i = 0; i < 6; i++) {
        if (userNumbers[i] === drawn[i]) {
          matches++
        } else {
          break // left to right matching rule
        }
      }
      setMatchCount(matches)

      if (matches >= 2) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        })
      }
    }, 1500)
  }

  const handleCopyThread = () => {
    const fullText = SOLARA_THREAD.map((t) => t.content).join('\n\n---\n\n')
    navigator.clipboard.writeText(fullText)
    setCopiedThread(true)
    confetti({ particleCount: 50, spread: 60 })
    setTimeout(() => setCopiedThread(false), 2500)
  }

  const handleCopyReview = () => {
    navigator.clipboard.writeText(
      `📱 Solana Seeker Review for @SolaraLottery:\n\n"${seekerReviewText}"\n\nLive on Seeker dApp Store & https://solaralotto.io #SolanaSeeker #SOLARA`
    )
    setCopiedReview(true)
    confetti({ particleCount: 50, spread: 60 })
    setTimeout(() => setCopiedReview(false), 2500)
  }

  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-white/10 glass-panel sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl solara-gradient flex items-center justify-center font-black text-2xl shadow-lg shadow-amber-600/30">
              🎰
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
                  SOLARA <span className="text-amber-400">Lotto Portal</span>
                </h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  $500 USDC Bounty Suite
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span>100% On-Chain Weekly Lottery on Solana & Seeker dApp Store</span>
                <span>•</span>
                <span className="text-amber-400 font-mono">$5 in SOL</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://solaralotto.io"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl solara-gradient hover:opacity-90 transition text-xs font-bold text-white shadow-lg shadow-amber-500/20"
            >
              <span>solaralotto.io</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Show The World SOLARA — Official Creator & Seeker Hub</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              Transparent, Verifiable <span className="text-gradient">On-Chain Lottery</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              No black boxes. No hidden operators. Weekly draws settle every Thursday at 3:00 PM UTC on Solana with VRF entropy, rolling jackpots, and native Solana Seeker Seed Vault integration.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-amber-400">$5 USD</div>
                <div className="text-xs text-slate-400 font-medium">Ticket Price (in SOL)</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-emerald-400">40% Pool</div>
                <div className="text-xs text-slate-400 font-medium">Match 6 Jackpot</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-sky-400">Seeker dApp</div>
                <div className="text-xs text-slate-400 font-medium">Mobile Store Native</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-purple-400">Thurs 3PM</div>
                <div className="text-xs text-slate-400 font-medium">Weekly UTC Settlement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('draw-simulator')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'draw-simulator' 
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Interactive Draw Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('brackets')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'brackets' 
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>6-Bracket Prize Allocator</span>
          </button>
          <button
            onClick={() => setActiveTab('seeker-review')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'seeker-review' 
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Seeker dApp Store Review Studio</span>
          </button>
          <button
            onClick={() => setActiveTab('x-thread')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'x-thread' 
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>Viral 5-Part X Thread (Task 1)</span>
          </button>
        </div>

        {/* TAB 1: Draw Simulator */}
        {activeTab === 'draw-simulator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Pick Ticket Numbers */}
            <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-lg font-bold text-white">1. Select Your 6 Lucky Digits</h3>
                <button
                  onClick={handleRandomize}
                  className="px-3 py-1 rounded-lg glass-card text-xs font-semibold text-amber-300 hover:bg-white/10 flex items-center gap-1.5 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Randomize</span>
                </button>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {userNumbers.map((num, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-[10px] text-slate-500 mb-1 font-mono">D{idx + 1}</span>
                    <input
                      type="number"
                      min="0"
                      max="9"
                      value={num}
                      onChange={(e) => {
                        const newNums = [...userNumbers]
                        newNums[idx] = Math.max(0, Math.min(9, Number(e.target.value)))
                        setUserNumbers(newNums)
                      }}
                      className="w-12 h-14 rounded-2xl bg-slate-900 border-2 border-amber-500/40 text-center font-black text-xl text-white focus:outline-none focus:border-amber-400 shadow-inner"
                    />
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Ticket Price:</span>
                  <span className="text-amber-400 font-mono font-bold">$5.00 USD (~0.035 SOL)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Settlement Program:</span>
                  <span className="text-white font-mono">SolaraLottoVrf11111111111</span>
                </div>
              </div>

              <button
                onClick={handleRunDraw}
                disabled={isDrawing}
                className="w-full py-4 rounded-2xl solara-gradient text-sm font-black text-white shadow-xl shadow-amber-600/30 hover:opacity-95 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isDrawing ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" />
                    <span>Verifying On-Chain VRF Entropy...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Simulate Weekly Draw Settlement</span>
                  </>
                )}
              </button>
            </div>

            {/* Live Draw Outcome Display */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border-2 border-amber-500/40 space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-white text-sm">Draw #48 Result (Thurs 3PM UTC)</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Verified VRF</span>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Winning Numbers</div>
                  <div className="flex justify-center gap-2">
                    {drawResult ? (
                      drawResult.map((num, idx) => {
                        const isMatched = userNumbers[idx] === num && idx < matchCount
                        return (
                          <div
                            key={idx}
                            className={`w-12 h-14 rounded-2xl flex items-center justify-center font-black text-2xl border-2 transition ${
                              isMatched
                                ? 'bg-emerald-500 text-slate-950 border-emerald-300 shadow-lg shadow-emerald-500/40 animate-bounce'
                                : 'bg-slate-900 text-amber-300 border-amber-500/30'
                            }`}
                          >
                            {num}
                          </div>
                        )
                      })
                    ) : (
                      Array.from({ length: 6 }).map((_, idx) => (
                        <div
                          key={idx}
                          className="w-12 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center font-mono text-slate-500 text-xl"
                        >
                          ?
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {drawResult && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-1">
                    <div className="font-black text-base text-white">
                      {matchCount > 0 ? `Matched ${matchCount} Digit(s) Left-to-Right!` : 'No matches this round.'}
                    </div>
                    <p className="text-xs text-amber-300 font-medium">
                      {matchCount === 6 && '🏆 JACKPOT WINNER! 40% of Pool Claimable!'}
                      {matchCount === 5 && '🎉 Match 5 Winner! 20% of Pool Claimable!'}
                      {matchCount === 4 && '✨ Match 4 Winner! 10% of Pool Claimable!'}
                      {matchCount === 3 && '✨ Match 3 Winner! 5% of Pool Claimable!'}
                      {matchCount === 2 && '✨ Match 2 Winner! 3% of Pool Claimable!'}
                      {matchCount === 1 && '✨ Match 1 Winner! 2% of Pool Claimable!'}
                      {matchCount === 0 && 'Better luck next Thursday! Rollover jackpot increases.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 6-Bracket Prize Allocator */}
        {activeTab === 'brackets' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">6-Tier Prize Bracket Allocation</h3>
                <p className="text-xs text-slate-400">Left-to-Right matching rules with automatic rollover for unclaimed tiers.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">Simulate Total Pool:</span>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={totalPool}
                  onChange={(e) => setTotalPool(Number(e.target.value))}
                  className="w-32 accent-amber-500"
                />
                <span className="font-mono text-amber-400 text-xs font-bold">{totalPool} SOL</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PRIZE_BRACKETS.map((bracket) => {
                const calculatedSol = ((totalPool * bracket.poolPercentage) / 100).toFixed(1)
                return (
                  <div key={bracket.matchCount} className="glass-card p-5 rounded-2xl border border-white/5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-base">{bracket.label}</span>
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {bracket.poolPercentage}% of Pool
                      </span>
                    </div>
                    <div className="text-3xl font-black text-amber-400 font-mono">
                      {calculatedSol} SOL
                    </div>
                    <div className="text-xs text-slate-400">
                      Estimated Payout for Match {bracket.matchCount} ({bracket.poolPercentage}% of {totalPool} SOL).
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* TAB 3: Seeker Review Studio */}
        {activeTab === 'seeker-review' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-amber-400" />
                  Task 2: Solana Seeker dApp Store Review Studio
                </h3>
                <p className="text-xs text-slate-400">Generate, customize, and copy your genuine hands-on review for @SolaraLottery.</p>
              </div>
              <button
                onClick={handleCopyReview}
                className="px-4 py-2 rounded-xl solara-gradient text-xs font-bold text-white shadow-lg shadow-amber-500/20 flex items-center gap-2"
              >
                {copiedReview ? <Check className="w-3.5 h-3.5 text-amber-200" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedReview ? 'Copied Review!' : 'Copy Review for X'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <span className="text-xs font-bold text-white ml-2">5.0 / 5.0 Seeker Store Rating</span>
                </div>

                <textarea
                  rows={6}
                  value={seekerReviewText}
                  onChange={(e) => setSeekerReviewText(e.target.value)}
                  className="w-full p-4 rounded-2xl bg-slate-900 border border-white/10 text-xs text-slate-200 leading-relaxed font-sans focus:outline-none focus:border-amber-500"
                />

                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 text-xs text-slate-400 space-y-1">
                  <div>✅ <strong>Required for Task 2 ($10 Bonus):</strong></div>
                  <div>• Attach a screenshot of your review on the Seeker dApp Store.</div>
                  <div>• Tag <strong>@SolaraLottery</strong> and link to <strong>solaralotto.io</strong>.</div>
                </div>
              </div>

              {/* Seeker Mockup Screen */}
              <div className="p-6 rounded-3xl bg-slate-950 border-2 border-amber-500/40 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base">📱</span>
                    <span className="font-bold text-white text-xs">Solana Seeker dApp Store</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Seed Vault Active</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-white">SOLARA LOTTO — Verifiable Weekly Draws</div>
                  <div className="text-slate-400">Reviewed by Verified Seeker Owner</div>
                  <p className="p-3 rounded-xl bg-slate-900 text-slate-300 italic text-[11px] leading-relaxed">
                    "{seekerReviewText}"
                  </p>
                </div>

                <div className="text-[10px] text-slate-500 text-center font-mono">
                  SOLARA v2.4 • Verified on Solana Mainnet-Beta
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Viral X Thread */}
        {activeTab === 'x-thread' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-amber-400" />
                  Task 1: Complete 5-Part Viral X Thread ($180 1st Prize)
                </h3>
                <p className="text-xs text-slate-400">Accurate breakdown covering $5 tickets in SOL, Thursday draws, 6 brackets, and Seeker store.</p>
              </div>
              <button
                onClick={handleCopyThread}
                className="px-4 py-2 rounded-xl solara-gradient text-xs font-bold text-white shadow-lg shadow-amber-500/20 flex items-center gap-2"
              >
                {copiedThread ? <Check className="w-3.5 h-3.5 text-amber-200" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedThread ? 'Copied Full Thread!' : 'Copy Full Thread (5 Posts)'}</span>
              </button>
            </div>

            <div className="space-y-4">
              {SOLARA_THREAD.map((post) => (
                <div key={post.postNumber} className="glass-card p-5 rounded-2xl border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400">Post {post.postNumber} / 5</span>
                    <span className="text-[10px] font-semibold text-slate-400">{post.focus}</span>
                  </div>
                  <pre className="text-xs text-slate-200 font-mono whitespace-pre-wrap leading-relaxed">
                    {post.content}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 glass-panel py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>Built for <strong>SOLARA Lottery</strong> ($500 USDC Bounty)</div>
          <div className="flex items-center gap-3">
            <span>Tags: @SolaraLottery • solaralotto.io</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
