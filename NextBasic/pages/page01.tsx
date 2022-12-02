import React from 'react';
import Layout from '../layouts/Layout01';

const page01 = () => {
  return (
    <>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f79412;
          color: white;
          font-size: 3rem;
        }
      `}</style>
      <div>Page01</div>
    </>
  );
};

page01.withLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default page01;
