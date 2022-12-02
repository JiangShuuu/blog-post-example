import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {
  children: React.ReactNode;
}

function Layout02({ children }: Props) {
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

        <p>Layout02</p>
        {children}
        <Footer />
      </div>
    </>
  );
}

const withLayout03 = (Component: any) => {
  Component.withLayout = (page: React.ReactNode) => {
    return (
      <>
        <h2>withLayout03</h2>
        <Layout02>{page}</Layout02>
      </>
    );
  };
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

export default Layout02;

export { withLayout03, withLayout04 };
