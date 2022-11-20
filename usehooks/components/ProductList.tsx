import React from 'react';

export default function ProductList({ products }: any) {
  return (
    <div>
      {products.map((item: string, idx: number) => {
        return <h1 key={idx}>{item}</h1>;
      })}
    </div>
  );
}
