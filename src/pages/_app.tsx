import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyles';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Guidance - Boilerplate</title>
      </Head>
      <Component {...pageProps} />;
      <GlobalStyles />
    </ThemeProvider>
  );
}
