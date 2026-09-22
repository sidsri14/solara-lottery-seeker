import { PrizeBracket, LotteryDraw, ThreadPost } from './types'

export const PRIZE_BRACKETS: PrizeBracket[] = [
  { matchCount: 6, label: 'Match 6 (Jackpot)', poolPercentage: 40, estimatedSol: 240.0, rolloverStatus: true },
  { matchCount: 5, label: 'Match 5 Digits', poolPercentage: 20, estimatedSol: 120.0, rolloverStatus: false },
  { matchCount: 4, label: 'Match 4 Digits', poolPercentage: 10, estimatedSol: 60.0, rolloverStatus: false },
  { matchCount: 3, label: 'Match 3 Digits', poolPercentage: 5, estimatedSol: 30.0, rolloverStatus: false },
  { matchCount: 2, label: 'Match 2 Digits', poolPercentage: 3, estimatedSol: 18.0, rolloverStatus: false },
  { matchCount: 1, label: 'Match 1 Digit', poolPercentage: 2, estimatedSol: 12.0, rolloverStatus: false }
]

export const LATEST_DRAW: LotteryDraw = {
  drawId: 48,
  drawDate: 'Every Thursday, 3:00 PM UTC',
  winningNumbers: [7, 3, 9, 1, 4, 8],
  totalPoolSol: 600.0,
  jackpotSol: 240.0,
  totalTickets: 12000,
  vrfSignature: '5K3R...9xXqSolanaOnChainVRF777'
}

export const SOLARA_THREAD: ThreadPost[] = [
  {
    postNumber: 1,
    focus: 'Hook & What is SOLARA',
    content: `🎰 Traditional lotteries are a multi-billion dollar black box.

No one knows who runs the backend, how RNG is seeded, or where 50%+ of ticket revenues vanish.

Enter @SolaraLottery — the first 100% on-chain weekly lottery natively built on Solana.

Here's how it works & why verifiable randomness changes everything 🧵👇`
  },
  {
    postNumber: 2,
    focus: 'Mechanics & Ticket Price',
    content: `🎟️ The Rules & Economics:

• Tickets cost just $5, paid directly in $SOL
• Every Thursday at 3:00 PM UTC, the smart contract settles the draw
• Zero manual human intervention or operators pulling balls
• 100% verifiable on Solscan in real-time

Check the live pool: https://solaralotto.io`
  },
  {
    postNumber: 3,
    focus: 'Bracket Payouts & Rollover Jackpot',
    content: `💰 6 Prize Tiers (Left-to-Right Match):

Match 1: 2% of pool
Match 2: 3% of pool
Match 3: 5% of pool
Match 4: 10% of pool
Match 5: 20% of pool
Match 6: 40% JACKPOT 🏆

⚡ Unclaimed tiers roll over to the next week, allowing the jackpot to compound exponentially.`
  },
  {
    postNumber: 4,
    focus: 'Solana Seeker dApp Integration',
    content: `📱 Built for Solana Mobile & Seeker:

SOLARA LOTTO isn't just on the web — it is live natively on the @solanamobile Seeker dApp Store.

With Seed Vault hardware security, buying a ticket and claiming winnings directly into self-custody takes one biometric tap.

Zero middleman risk.`
  },
  {
    postNumber: 5,
    focus: 'Summary & Call to Action',
    content: `🛡️ Why On-Chain Verification Matters:

When math and code replace shady lottery corporations, transparency wins.

Try your numbers for this Thursday's draw at https://solaralotto.io or download from the Seeker dApp Store.

Tagging @SolaraLottery 🚀 #Solana #SolanaSeeker #SOLARA`
  }
]
