import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout01({ children }: Props) {
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
