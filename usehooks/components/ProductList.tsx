import React from 'react';

export default function ProductList({ products }: any) {
  return (
    <div>
      {products.map((item: string, idx: number) => {
        return (
          <div key={idx} className='item'>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}
