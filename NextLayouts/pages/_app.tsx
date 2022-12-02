import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav';

export default function App({ Component, pageProps, router }: { Component: any; pageProps: AppProps; router: { pathname: string } }) {
  // router 判斷
  if (router.pathname === '/page02') {
    return (
      <div>
        <Nav />
        <p>Layout2</p>
        <Component {...pageProps} />
      </div>
    );
  }

  // 有 withLayout, 執行並渲染
  if (typeof Component.withLayout === 'function') {
    return (
      <>
        <Nav />
        {Component.withLayout(<Component {...pageProps} />)}
      </>
    );
  }
  // 没有就直接渲染
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
