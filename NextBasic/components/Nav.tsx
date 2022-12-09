import React from 'react';
import Link from 'next/link';
export default function Nav() {
  return (
    <>
      <div className='main'>
        <Link href='/ssg'>
          <button>ssg</button>
        </Link>
        <Link href='/ssg/:id'>
          <button>ssg/id</button>
        </Link>
        <Link href='/ssr'>
          <button>ssr</button>
        </Link>
        <Link href='/ssr/:id'>
          <button>ssr/id</button>
        </Link>
      </div>

      <style jsx>{`
        button {
          all: unset;
          border: 1px solid;
          margin: 0 0.5rem;
          padding: 0.25rem 1rem;
          border-radius: 5px;
          transition: 0.2s;
        }

        button:hover {
          background-color: #45c7f5;
          color: white;
        }
      `}</style>
    </>
  );
}
