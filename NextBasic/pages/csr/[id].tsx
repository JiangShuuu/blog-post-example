import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Nav from '../../components/Nav';

const linkUrl = [
  {
    name: 'home',
    link: '/'
  },
  {
    name: '01',
    link: '/csr/1'
  },
  {
    name: '02',
    link: '/csr/2'
  },
  {
    name: '03',
    link: '/csr/3'
  },
  {
    name: '04',
    link: '/csr/4'
  }
];

export default function CSRID() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const id = Number(router.query.id);

  async function getData(id: number) {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) getData(id);
  }, [id]);

  return (
    <>
      <div className=''>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main>
          <h2>Next CSR</h2>
          <Nav linkUrl={linkUrl} />
          {isLoading ? <p>isLoading...</p> : <p>{JSON.stringify(data)}</p>}
        </main>
      </div>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
