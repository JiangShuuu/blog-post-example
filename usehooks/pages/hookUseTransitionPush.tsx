import React, { useEffect, useState, useTransition, useDeferredValue } from 'react';
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
    setInput(e.target.value);
  };

  const defferedInput = useDeferredValue(input);

  useEffect(() => {
    startTransition(() => {
      console.log('hihi');
      if (input.length > 0) {
        const products = [] as string[];
        for (let i = 0; i < LIST_SIZE; i++) {
          products.push(defferedInput);
        }
        setList(products);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defferedInput]);

  return (
    <div className='content'>
      <h1>useTransitionPush</h1>
      <header>
        <Link href='/'>Home</Link>
        <Link href='/hookUseTransitionFilter'>Filter</Link>
      </header>

      {/* input */}
      <div className='input'>
        <label htmlFor=''>輸入篩選數字</label>
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
