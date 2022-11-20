import React, { useState, useTransition } from 'react';
import Link from 'next/link';

const generateProducts = () => {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
};

const filterProducts = (filterTerm: string) => {
  if (!filterTerm) {
    return generateProducts();
  }
  return generateProducts().filter((product: string) => product.includes(filterTerm));
};

export default function HookUseTransition() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  const updateFilterHandler = (event: any) => {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
  };

  return (
    <div className='content'>
      <h1>useTransition</h1>
      <header>
        <Link href='/'>Home</Link>
      </header>

      {/* input */}
      <div className='input'>
        <label htmlFor=''>輸入篩選數字</label>
        <input type='text' onChange={updateFilterHandler} />
      </div>

      {/* items */}
      <div>
        {isPending ? (
          'isLoading....'
        ) : (
          <>
            {filteredProducts.map((item: string, idx: number) => {
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
