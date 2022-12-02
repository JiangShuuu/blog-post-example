import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, router }: { Component: any; pageProps: AppProps; router: { pathname: string } }) {
  // router 判斷
  if (router.pathname === '/page02') {
    return (
      <div>
        <p>Layout2</p>
        <Component {...pageProps} />
      </div>
    );
  }

  // 有 withLayout, 執行並渲染
  if (typeof Component.withLayout === 'function') {
    return Component.withLayout(<Component {...pageProps} />);
  }
  // 没有就直接渲染
  return <Component {...pageProps} />;
}
