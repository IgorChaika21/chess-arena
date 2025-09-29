import { create } from 'zustand';

import type { CapturedPieces, MoveHistory } from '@/types/types';
import { Colors, GameMode, GameStatus } from '@/types/types';

type Player = Colors.WHITE | Colors.BLACK;

interface GameState {
  darkMode: boolean;
  currentPlayer: Player;
  gameStatus: GameStatus;
  gameStarted: boolean;
  capturedPieces: CapturedPieces;
  moveHistory: MoveHistory;
  resignedPlayer: Player | null;
  gameMode: GameMode.PVP | GameMode.PVB;
  playerColor: Player;

  toggleTheme: () => void;
  startGame: (mode: GameMode.PVP | GameMode.PVB, color?: Player) => void;
  resetGame: () => void;
  resign: (player: Player) => void;

  setCurrentPlayer: (player: Player) => void;
  setCapturedPieces: (pieces: CapturedPieces) => void;
  setMoveHistory: (history: MoveHistory) => void;
  setGameStatus: (status: GameStatus) => void;
}

export const useGameStore = create<GameState>(set => ({
  darkMode: true,
  currentPlayer: Colors.WHITE,
  gameStatus: GameStatus.IN_PROGRESS,
  gameStarted: false,
  capturedPieces: { white: [], black: [] },
  moveHistory: [],
  resignedPlayer: null,
  gameMode: GameMode.PVP,
  playerColor: Colors.WHITE,

  toggleTheme: () => set(state => ({ darkMode: !state.darkMode })),

  setCurrentPlayer: player => set({ currentPlayer: player }),
  setCapturedPieces: pieces => set({ capturedPieces: pieces }),
  setMoveHistory: history => set({ moveHistory: history }),
  setGameStatus: status => set({ gameStatus: status }),

  startGame: (mode, color = Colors.WHITE) => {
    set({
      gameMode: mode,
      playerColor: color,
      gameStarted: true,
      currentPlayer: Colors.WHITE,
      gameStatus: GameStatus.IN_PROGRESS,
      capturedPieces: { white: [], black: [] },
      moveHistory: [],
      resignedPlayer: null,
    });
  },

  resetGame: () => {
    set({
      gameStarted: false,
      currentPlayer: Colors.WHITE,
      gameStatus: GameStatus.IN_PROGRESS,
      capturedPieces: { white: [], black: [] },
      moveHistory: [],
      resignedPlayer: null,
    });
  },

  resign: player => {
    set({
      resignedPlayer: player,
      gameStatus: GameStatus.CHECKMATE,
    });
  },
}));

export function useEffectiveGameStatus() {
  const gameStatus = useGameStore(state => state.gameStatus);
  const resignedPlayer = useGameStore(state => state.resignedPlayer);

  return resignedPlayer ? GameStatus.CHECKMATE : gameStatus;
}
