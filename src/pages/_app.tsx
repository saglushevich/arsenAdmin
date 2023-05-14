import type { AppProps } from 'next/app'
import GlobalStyles from "@styles";
import { Provider } from 'react-redux';
import store from '@store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyles />
    </Provider>
  )
}
