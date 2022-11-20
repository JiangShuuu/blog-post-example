import React, { useId } from 'react';
import Link from 'next/link';

const Hook = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Label{id}</label>
      <input id={id} type='text' />
    </>
  );
};

export default function HookUseId({ data }: any) {
  // random 會因為 Hydration 前後而造成 id random 不一至狀況
  // const id = Math.random();
  return (
    <div className='content'>
      <h1>hookUseId</h1>
      <header>
        <Link href='/'>Home</Link>
      </header>

      {/* <div>
        <label htmlFor={`${id}`}>data</label>
        <input id={id} type='text' />
      </div> */}

      <div>
        <Hook />
      </div>
      <div>
        <Hook />
      </div>
      <div>
        <Hook />
      </div>
    </div>
  );
}
