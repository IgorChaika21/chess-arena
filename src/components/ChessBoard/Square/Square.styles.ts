import styled from 'styled-components';

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
