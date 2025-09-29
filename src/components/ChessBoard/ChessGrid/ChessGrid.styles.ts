// src/components/ChessBoard/ChessGrid.styles.ts
import styled from 'styled-components';

import { media } from '@/styles/breakpoints';

export const ChessBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: relative;

  ${media.lg} {
    margin: 60px;
  }
`;

export const ChessBoardAndRowLabels = styled.div`
  display: flex;
`;

export const BoardGrid = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #333;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  width: 64vmin;
  height: 64vmin;
  max-width: 720px;
  max-height: 720px;

  ${media.xl} {
    width: 56vmin;
    height: 56vmin;
    max-width: 700px;
    max-height: 700px;
  }

  ${media.lg} {
    width: 80vmin;
    height: 80vmin;
    max-width: none;
    max-height: none;
  }
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
`;

export const ColumnLabels = styled.div`
  background-color: #b58863;
  border-right: 2px solid #333;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-content: end;
`;

export const RowLabels = styled.div`
  background-color: #b58863;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 2px solid #333;
  padding: 5px;
`;

export const NotationLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a3921;
  font-weight: bold;
  font-size: calc(90vmin / 8 * 0.15);
  font-family: 'Arial', sans-serif;
  user-select: none;

  ${media.xl} {
    font-size: calc(95vmin / 8 * 0.15);
  }
`;

export const NotationColumnLabel = styled(NotationLabel)`
  width: 8vmin;
  max-width: 90px;
  max-height: 90px;

  ${media.xl} {
    width: 7vmin;
  }

  ${media.lg} {
    width: 10vmin;
    max-width: none;
  }
`;
