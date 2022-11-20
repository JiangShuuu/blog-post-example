import React, { useMemo, useState, useDeferredValue, useEffect } from 'react';
import Link from 'next/link';

function Lists({ input }: { input: string }) {
  const LIST_SIZE = 20000;
  const defferedInput = useDeferredValue(input);

  const list = useMemo(() => {
    const product = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      product.push(<div key={i}>{defferedInput}</div>);
    }
    return <>{product}</>;
  }, [defferedInput]);

  useEffect(() => {
    console.log(`Input: ${input}\nDeffered: ${defferedInput}`);
  }, [input, defferedInput]);

  return list;
}

export default function HookUseDefferedValue() {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className='content'>
      <h1>hookUseDefferedValue</h1>
      <header>
        <Link href='/'>Home</Link>
      </header>

      <div>
        <input type='text' value={input} onChange={handleChange} />
        <Lists input={input} />
      </div>
    </div>
  );
}
