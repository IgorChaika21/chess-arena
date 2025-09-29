// src/components/ChessBoard/Square.styles.ts
import styled from 'styled-components';

import { media } from '@/styles/breakpoints';

export const SquareContainer = styled.div<{
  $isDark: boolean;
  $isSelected: boolean;
  $isMoveOption: boolean;
}>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  background-color: ${props =>
    props.$isSelected
      ? 'rgba(255, 255, 0, 0.7)'
      : props.$isDark
        ? '#b58863'
        : '#f0d9b5'};

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  ${props =>
    props.$isMoveOption &&
    `
    &::before {
      content: "";
      position: absolute;
      width: 30%;
      height: 30%;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);
      pointer-events: none;
    }
  `}
`;

export const Piece = styled.span<{ $color: 'white' | 'black' }>`
  font-size: calc(90vmin / 8 * 0.6);
  position: absolute;
  line-height: 1;
  user-select: none;
  color: ${props => props.$color};

  ${props =>
    props.$color === 'white' &&
    `
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  `}

  ${media.xl} {
    font-size: calc(95vmin / 8 * 0.6);
  }
`;
