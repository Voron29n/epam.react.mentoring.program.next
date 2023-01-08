import '@fontsource/montserrat';
import { Hydrate } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Providers } from 'components/containers/Providers';
import '../../styles/globals.css';
import '../../styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </Providers>
  );
}
