// types.ts
export enum Colors {
  WHITE = 'white',
  BLACK = 'black',
}

export enum FigureNames {
  KING = 'king',
  KNIGHT = 'knight',
  PAWN = 'pawn',
  QUEEN = 'queen',
  ROOK = 'rook',
  BISHOP = 'bishop',
}

export enum GameMode {
  PVP = 'pvp',
  PVB = 'pvb',
}

export interface ChessPiece {
  symbol: string;
  color: Colors;
  type: FigureNames;
  hasMoved?: boolean;
}

export enum GameStatus {
  IN_PROGRESS = 'in-progress',
  CHECK = 'check',
  CHECKMATE = 'checkmate',
  STALEMATE = 'stalemate',
}

export type PromotionPieceType =
  | FigureNames.QUEEN
  | FigureNames.ROOK
  | FigureNames.BISHOP
  | FigureNames.KNIGHT;

export type BoardPosition = [number, number];

export type Board = (ChessPiece | null)[][];

export interface CapturedPieces {
  white: ChessPiece[];
  black: ChessPiece[];
}

export interface PromotionMove {
  from: BoardPosition;
  to: BoardPosition;
}

export interface Move {
  from: BoardPosition;
  to: BoardPosition;
  piece: ChessPiece;
  capturedPiece: ChessPiece | null;
  promotion?: PromotionPieceType;
  notation: string;
}

export type MoveHistory = Move[];

export interface ApplyMoveParams {
  board: Board;
  from: BoardPosition;
  to: BoardPosition;
  currentPlayer: Colors;
  enPassantTarget: BoardPosition | null;
  capturedPieces: CapturedPieces;
  moveHistory: MoveHistory;
  promotionPieceType?: PromotionPieceType;
}

export interface ApplyMoveResult {
  newBoard: Board;
  newCapturedPieces: CapturedPieces;
  newEnPassantTarget: BoardPosition | null;
  newMoveHistory: MoveHistory;
  newGameStatus: GameStatus;
  nextPlayer: Colors;
  promotionRequired: boolean;
}

export interface MoveResult {
  newBoard: Board;
  capturedPiece: ChessPiece | null;
  newEnPassantTarget: BoardPosition | null;
  newCapturedPieces: CapturedPieces;
  promotionRequired: boolean;
}

export interface BotMoveResult {
  newBoard: Board;
  newCapturedPieces: CapturedPieces;
  newEnPassantTarget: BoardPosition | null;
  newMoveHistory: MoveHistory;
  newGameStatus: GameStatus;
  nextPlayer: Colors;
}

export interface ChessBoardProps {
  size?: number;
  currentPlayer: Colors;
  setCurrentPlayer: (player: Colors) => void;
  gameStatus: GameStatus;
  setGameStatus: (status: GameStatus) => void;
  gameStarted: boolean;
  onResetGame: () => void;
  capturedPieces: CapturedPieces;
  setCapturedPieces: (captured: CapturedPieces) => void;
  moveHistory: MoveHistory;
  setMoveHistory: (history: MoveHistory) => void;
  gameMode: GameMode;
  playerColor: Colors;
}
