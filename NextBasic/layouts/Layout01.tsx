import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {
  children: React.ReactNode;
}

function Layout01({ children }: Props) {
  return (
    <>
      <style jsx>{`
        p {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <div>
        <Header />
        <p>Layout01</p>
        {children}
        <Footer />
      </div>
    </>
  );
}

const withLayout = (Component: any) => {
  Component.withLayout = (page: React.ReactNode) => <Layout01>{page}</Layout01>;
  return Component;
};

const withLayout04 = (Component: any) => {
  Component.withLayout = (page: React.ReactNode) => {
    return (
      <div>
        <h2>withLayout04</h2>
        {page}
        <p>withLayout04</p>
      </div>
    );
  };
  return Component;
};

export default Layout01;

export { withLayout, withLayout04 };
