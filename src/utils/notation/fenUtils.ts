import type { Board } from '@/types/types';
import { Colors, FigureNames } from '@/types/types';

export const convertBoardToFEN = (
  board: Board,
  currentPlayer: Colors
): string => {
  let fen = '';

  // Piece placement
  for (let row = 0; row < 8; row++) {
    let emptyCount = 0;
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (!piece) {
        emptyCount++;
      } else {
        if (emptyCount > 0) {
          fen += emptyCount;
          emptyCount = 0;
        }
        let pieceChar = '';
        switch (piece.type) {
          case FigureNames.PAWN:
            pieceChar = 'p';
            break;
          case FigureNames.KNIGHT:
            pieceChar = 'n';
            break;
          case FigureNames.BISHOP:
            pieceChar = 'b';
            break;
          case FigureNames.ROOK:
            pieceChar = 'r';
            break;
          case FigureNames.QUEEN:
            pieceChar = 'q';
            break;
          case FigureNames.KING:
            pieceChar = 'k';
            break;
        }
        fen +=
          piece.color === Colors.WHITE ? pieceChar.toUpperCase() : pieceChar;
      }
    }
    if (emptyCount > 0) {
      fen += emptyCount;
    }
    if (row < 7) {
      fen += '/';
    }
  }

  // Side to move
  fen += ` ${currentPlayer === Colors.WHITE ? 'w' : 'b'}`;

  // Castling availability (simplified)
  fen += ' KQkq';

  // En passant (simplified)
  fen += ' -';

  // Halfmove clock and fullmove number (simplified)
  fen += ' 0 1';

  return fen;
};
