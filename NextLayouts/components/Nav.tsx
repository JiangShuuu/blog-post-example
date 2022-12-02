import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p {
          border: 1px solid;
          margin: 1rem;
        }
      `}</style>
      <div>
        <Link href={'/page01'}>
          <p>Layout01</p>
        </Link>
        <Link href={'/page02'}>
          <p>Layout02</p>
        </Link>
        <Link href={'/page03'}>
          <p>Layout03</p>
        </Link>
        <Link href={'/page04'}>
          <p>Layout04</p>
        </Link>
      </div>
    </>
  );
}
