import { useState, useCallback, useMemo } from 'react';

import { INITIALBOARD } from '@/constants/constants';
import type { Board, PromotionMove, BoardPosition } from '@/types/types';

interface BoardState {
  board: Board;
  selectedSquare: BoardPosition | null;
  enPassantTarget: BoardPosition | null;
  promotionMove: PromotionMove | null;
}

const createInitialState = (): BoardState => ({
  board: INITIALBOARD,
  selectedSquare: null,
  enPassantTarget: null,
  promotionMove: null,
});

export function useBoardState() {
  const [state, setState] = useState<BoardState>(createInitialState);

  const { board, selectedSquare, enPassantTarget, promotionMove } = state;

  const setBoard = useCallback((newBoard: Board) => {
    setState(prev => ({ ...prev, board: newBoard }));
  }, []);

  const setSelectedSquare = useCallback((square: BoardPosition | null) => {
    setState(prev => ({ ...prev, selectedSquare: square }));
  }, []);

  const setEnPassantTarget = useCallback((target: BoardPosition | null) => {
    setState(prev => ({ ...prev, enPassantTarget: target }));
  }, []);

  const setPromotionMove = useCallback((move: PromotionMove | null) => {
    setState(prev => ({ ...prev, promotionMove: move }));
  }, []);

  const resetBoard = useCallback(() => {
    setState(createInitialState());
  }, []);

  return useMemo(
    () => ({
      board,
      selectedSquare,
      enPassantTarget,
      promotionMove,
      setBoard,
      setSelectedSquare,
      setEnPassantTarget,
      setPromotionMove,
      resetBoard,
    }),
    [
      board,
      selectedSquare,
      enPassantTarget,
      promotionMove,
      setBoard,
      setSelectedSquare,
      setEnPassantTarget,
      setPromotionMove,
      resetBoard,
    ]
  );
}

export type UseBoardState = ReturnType<typeof useBoardState>;
