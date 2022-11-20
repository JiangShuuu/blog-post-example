import React, { useState } from 'react';
import Link from 'next/link';
import ProductList from '../components/ProductList';

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
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  const updateFilterHandler = (event: any) => {
    setFilterTerm(event.target.value);
  };

  return (
    <>
      <div className='content'>
        <h1>useTransition</h1>
        <header>
          <Link href='/'>Home</Link>
        </header>
        <div>
          <label htmlFor=''>輸入篩選數字</label>
          <input type='text' onChange={updateFilterHandler} />
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
}
