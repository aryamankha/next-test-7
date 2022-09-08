/* eslint-disable import/no-extraneous-dependencies */
import { AppProps } from 'next/app';

import '../styles/main.css';

if (
  typeof window !== 'undefined' &&
  process.env.NODE_ENV === 'development' &&
  /VIVID_ENABLED=true/.test(document.cookie)
) {
  import('vivid-studio').then((v) => v.run());
  import('vivid-studio/style');
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
