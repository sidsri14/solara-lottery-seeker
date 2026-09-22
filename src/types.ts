export interface PrizeBracket {
  matchCount: number;
  label: string;
  poolPercentage: number;
  estimatedSol: number;
  rolloverStatus: boolean;
}

export interface LotteryDraw {
  drawId: number;
  drawDate: string;
  winningNumbers: number[];
  totalPoolSol: number;
  jackpotSol: number;
  totalTickets: number;
  vrfSignature: string;
}

export interface ThreadPost {
  postNumber: number;
  content: string;
  focus: string;
}
