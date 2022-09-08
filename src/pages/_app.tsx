/* eslint-disable import/no-extraneous-dependencies */
import { AppProps } from 'next/app';

import '../styles/main.css';

if (process.env.NODE_ENV === 'development') {
  import('vivid-studio').then((v) => v.run());
  import('vivid-studio/style');
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
