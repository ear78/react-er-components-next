import { ViewTransition } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/lib/mui/theme';
import StoreProvider from './StoreProvider';
import LayoutProvider from '@/components/LayoutProvider';
import './global.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransition>
      <html lang="en">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <StoreProvider>
              <LayoutProvider>{children}</LayoutProvider>
            </StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </html>
    </ViewTransition>
  );
}
