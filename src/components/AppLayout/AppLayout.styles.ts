import styled from 'styled-components';

import { media } from '@/styles/breakpoints';

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lg} {
    flex-direction: column-reverse;
  }
`;

export const LeftColumn = styled.div`
  box-sizing: border-box;
  width: 60%;
  min-width: 35%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgColor};

  ${media.lg} {
    width: auto;
    height: auto;
    align-items: start;
    background-color: ${props => props.theme.bgColor};
  }
`;

export const RightColumn = styled.div`
  width: 40%;
  height: 100vh;
  padding: 2rem;
  background-color: ${props => props.theme.rightBgColor};
  box-sizing: border-box;
  overflow-y: auto;

  ${media.xl} {
    padding: 1.5rem;
  }

  ${media.lg} {
    width: auto;
    height: auto;
    padding: 1.5rem;
    overflow-y: visible;
  }
`;

export const ThemeToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 3rem;
  padding: 0.5rem;
  background: ${props => props.theme.buttonBg};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.theme.textColor};
  z-index: 100;

  &:hover {
    background: ${props => props.theme.buttonHover};
  }
`;
