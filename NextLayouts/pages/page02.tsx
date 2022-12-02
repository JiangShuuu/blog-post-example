import React from 'react';
import Layout02 from '../layouts/Layout';

const page02 = () => {
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
      <div>Page02</div>
    </>
  );
};

page02.withLayout = (page: React.ReactNode) => <Layout02>{page}</Layout02>;

export default page02;
