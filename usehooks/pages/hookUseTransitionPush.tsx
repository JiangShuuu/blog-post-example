import React, { useState, useTransition } from 'react';
import Link from 'next/link';

const generateProducts = () => {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
};

export default function HookUseTransition2() {
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState([] as string[]);
  const [input, setInput] = useState('');

  const LIST_SIZE = 15000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // hight
    setInput(e.target.value);
    // low
    startTransition(() => {
      if (input.length > 0) {
        const products = [] as string[];
        for (let i = 0; i < LIST_SIZE; i++) {
          products.push(input);
        }
        setList(products);
      }
    });
  };

  return (
    <div className='content'>
      <h1>useTransitionPush</h1>
      <header>
        <Link href='/'>Home</Link>
      </header>

      {/* input */}
      <div className='input'>
        <label htmlFor=''>輸入Array數字</label>
        <input type='text' value={input} onChange={handleChange} />
      </div>

      {/* items */}
      <div>
        {isPending ? (
          'isLoading....'
        ) : (
          <>
            {list.map((item: string, idx: number) => {
              return (
                <div key={idx} className='item'>
                  <p>{item}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
