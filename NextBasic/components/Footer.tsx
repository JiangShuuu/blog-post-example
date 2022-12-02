import React from 'react';

export default function Footer() {
  return (
    <>
      <style jsx>{`
        div {
          position: fixed;
          width: 100%;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2893fe;
          color: white;
          font-size: 3rem;
        }
      `}</style>
      <div>Footer</div>
    </>
  );
}
