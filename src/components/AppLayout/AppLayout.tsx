import ChessBoard from '@/components/ChessBoard/ChessBoard';
import GameInfo from '@/components/GameInfo/GameInfo';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher/ThemeSwitcher';

import { AppContainer, LeftColumn, RightColumn } from './AppLayout.styles';

const AppLayout: React.FC = () => {
  return (
    <div id="root">
      <ThemeSwitcher />
      <AppContainer>
        <LeftColumn>
          <ChessBoard />
        </LeftColumn>
        <RightColumn>
          <GameInfo />
        </RightColumn>
      </AppContainer>
    </div>
  );
};

export default AppLayout;
