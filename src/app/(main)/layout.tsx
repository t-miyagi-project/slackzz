import MainContent from '@/components/main-content';
import { ColorPrefrencesProvider } from '@/providers/color-prefrences';
import { ThemeProvider } from '@/providers/theme-provider';
import { FC, ReactNode } from 'react';


const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {/* <WebSocketProvider> */}
        <ColorPrefrencesProvider>
          <MainContent>
            {/* <QueryProvider> */}
              {children}
            {/* </QueryProvider> */}
          </MainContent>
        </ColorPrefrencesProvider>
      {/* </WebSocketProvider> */}
    </ThemeProvider>
  );
};

export default MainLayout;