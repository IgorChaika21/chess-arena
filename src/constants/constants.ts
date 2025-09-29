import { Colors, FigureNames, GameStatus } from '../types/types';
import type { Board } from '../types/types';

export const columnLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const rowLabels = ['8', '7', '6', '5', '4', '3', '2', '1'];

export const chessIcons: Record<FigureNames, string> = {
  [FigureNames.PAWN]: '♟',
  [FigureNames.ROOK]: '♜',
  [FigureNames.KNIGHT]: '♞',
  [FigureNames.BISHOP]: '♝',
  [FigureNames.QUEEN]: '♛',
  [FigureNames.KING]: '♚',
};

export const gameStatusText: Record<GameStatus, string> = {
  [GameStatus.CHECK]: 'Check!',
  [GameStatus.CHECKMATE]: 'Checkmate!',
  [GameStatus.STALEMATE]: 'Stalemate!',
  [GameStatus.IN_PROGRESS]: 'In Progress',
};

export const INITIALBOARD: Board = [
  [
    {
      symbol: chessIcons[FigureNames.ROOK],
      color: Colors.BLACK,
      type: FigureNames.ROOK,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.KNIGHT],
      color: Colors.BLACK,
      type: FigureNames.KNIGHT,
    },
    {
      symbol: chessIcons[FigureNames.BISHOP],
      color: Colors.BLACK,
      type: FigureNames.BISHOP,
    },
    {
      symbol: chessIcons[FigureNames.QUEEN],
      color: Colors.BLACK,
      type: FigureNames.QUEEN,
    },
    {
      symbol: chessIcons[FigureNames.KING],
      color: Colors.BLACK,
      type: FigureNames.KING,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.BISHOP],
      color: Colors.BLACK,
      type: FigureNames.BISHOP,
    },
    {
      symbol: chessIcons[FigureNames.KNIGHT],
      color: Colors.BLACK,
      type: FigureNames.KNIGHT,
    },
    {
      symbol: chessIcons[FigureNames.ROOK],
      color: Colors.BLACK,
      type: FigureNames.ROOK,
      hasMoved: false,
    },
  ],
  [
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.BLACK,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.BLACK,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.BLACK,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.BLACK,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.BLACK,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.BLACK,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.BLACK,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.BLACK,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.WHITE,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.WHITE,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.WHITE,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.WHITE,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.WHITE,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.WHITE,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.WHITE,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.PAWN],
      color: Colors.WHITE,
      type: FigureNames.PAWN,
      hasMoved: false,
    },
  ],
  [
    {
      symbol: chessIcons[FigureNames.ROOK],
      color: Colors.WHITE,
      type: FigureNames.ROOK,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.KNIGHT],
      color: Colors.WHITE,
      type: FigureNames.KNIGHT,
    },
    {
      symbol: chessIcons[FigureNames.BISHOP],
      color: Colors.WHITE,
      type: FigureNames.BISHOP,
    },
    {
      symbol: chessIcons[FigureNames.QUEEN],
      color: Colors.WHITE,
      type: FigureNames.QUEEN,
    },
    {
      symbol: chessIcons[FigureNames.KING],
      color: Colors.WHITE,
      type: FigureNames.KING,
      hasMoved: false,
    },
    {
      symbol: chessIcons[FigureNames.BISHOP],
      color: Colors.WHITE,
      type: FigureNames.BISHOP,
    },
    {
      symbol: chessIcons[FigureNames.KNIGHT],
      color: Colors.WHITE,
      type: FigureNames.KNIGHT,
    },
    {
      symbol: chessIcons[FigureNames.ROOK],
      color: Colors.WHITE,
      type: FigureNames.ROOK,
      hasMoved: false,
    },
  ],
];
