import Head from 'next/head';
import Nav from '../components/Nav';

const linkUrl = [
  {
    name: 'ssr',
    link: '/ssr'
  },
  {
    name: 'ssg',
    link: '/ssg'
  },
  {
    name: 'isr',
    link: '/isr'
  },
  {
    name: 'csr',
    link: '/csr'
  }
];

export default function Home() {
  return (
    <>
      <div className=''>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <h2>Next Basic</h2>
          <Nav linkUrl={linkUrl} />
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
