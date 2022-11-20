import React from 'react';

export default function ProductList({ products, isPending }: any) {
  return (
    <div>
      {isPending ? (
        <p>isLoading....</p>
      ) : (
        <>
          {products.map((item: string, idx: number) => {
            return (
              <div key={idx} className='item'>
                <p>{item}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
