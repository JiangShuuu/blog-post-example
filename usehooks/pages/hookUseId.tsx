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

export default function HookUseId() {
  const id = useId();
  return (
    <div className='content'>
      <h1>hookUseId</h1>
      <header>
        <Link href='/'>Home</Link>
      </header>

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
