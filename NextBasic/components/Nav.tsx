import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type links = {
  name: string;
  link: string;
};

interface linkUrlType {
  linkUrl: links[];
}

export default function Nav({ linkUrl }: linkUrlType) {
  const router = useRouter().asPath;

  return (
    <>
      <div className='main'>
        {linkUrl.map((item, idx) => {
          return (
            <Link key={idx} href={item.link}>
              <button disabled={router === item.link}>{item.name}</button>
            </Link>
          );
        })}
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

        .disabled {
          color: blue;
          cursor: not-allowed;
        }

        button:disabled {
          color: red;
          cursor: not-allowed;
        }
        button:disabled:hover {
          background-color: white;
          color: red;
        }

        button:hover {
          background-color: #45c7f5;
          color: white;
        }
      `}</style>
    </>
  );
}
