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
  console.log('reRender');
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState([] as string[]);

  const LIST_SIZE = 20000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      const products = [] as string[];
      for (let i = 0; i < LIST_SIZE; i++) {
        products.push(e.target.value);
      }
      setList(products);
    });
  };

  return (
    <div className='content'>
      <h1>useTransition</h1>
      <header>
        <Link href='/'>Home</Link>
        <Link href='/hookUseTransitionFilter'>Filter</Link>
      </header>

      {/* input */}
      <div className='input'>
        <label htmlFor=''>輸入篩選數字</label>
        <input type='text' onChange={handleChange} />
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