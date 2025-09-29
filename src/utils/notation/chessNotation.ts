// utils/chessNotation.ts
import { columnLabels, rowLabels } from '@/constants/constants';
import { FigureNames } from '@/types/types';
import type {
  Board,
  ChessPiece,
  PromotionPieceType,
  BoardPosition,
} from '@/types/types';

export const getSquareNotation = (row: number, col: number): string => {
  return `${columnLabels[col]}${rowLabels[row]}`;
};

export const getPieceNotation = (piece: ChessPiece): string => {
  switch (piece.type) {
    case FigureNames.KING:
      return 'K';
    case FigureNames.QUEEN:
      return 'Q';
    case FigureNames.ROOK:
      return 'R';
    case FigureNames.BISHOP:
      return 'B';
    case FigureNames.KNIGHT:
      return 'N';
    default:
      return '';
  }
};

export const getMoveNotation = (
  board: Board,
  from: BoardPosition,
  to: BoardPosition,
  capturedPiece: ChessPiece | null,
  promotion?: PromotionPieceType
): string => {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;
  const piece = board[fromRow][fromCol];

  if (!piece) return '';

  let notation = '';

  // Castling
  if (piece.type === FigureNames.KING && Math.abs(fromCol - toCol) === 2) {
    return toCol > fromCol ? 'O-O' : 'O-O-O';
  }

  // Piece notation (except pawns)
  if (piece.type !== FigureNames.PAWN) {
    notation += getPieceNotation(piece);
  }

  // From
  notation += getSquareNotation(fromRow, fromCol);

  // Capture
  if (capturedPiece) {
    notation += 'x';
  } else {
    notation += '-';
  }

  // Destination
  notation += getSquareNotation(toRow, toCol);

  // Promotion
  if (promotion) {
    notation += `=${getPieceNotation({ type: promotion } as ChessPiece)}`;
  }

  return notation;
};
