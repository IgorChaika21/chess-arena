// src/components/ChessBoard/Square.tsx
import React from 'react';

import type { ChessPiece } from '@/types/types';

import { SquareContainer, Piece } from './Square.styles';

interface SquareProps {
  isDark: boolean;
  isSelected: boolean;
  isMoveOption?: boolean;
  onClick: () => void;
  piece?: ChessPiece | null;
}

const Square: React.FC<SquareProps> = ({
  isDark,
  isSelected,
  onClick,
  piece,
  isMoveOption = false,
}) => {
  return (
    <SquareContainer
      $isDark={isDark}
      $isSelected={isSelected}
      $isMoveOption={isMoveOption}
      onClick={onClick}
    >
      {piece && <Piece $color={piece.color}>{piece.symbol}</Piece>}
    </SquareContainer>
  );
};

export default Square;
