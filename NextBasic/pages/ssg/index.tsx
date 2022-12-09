import Head from 'next/head';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Nav from '../../components/Nav';

const getData = async () => {
  const { data } = await axios.get('https://swapi.dev/api/');
  return data;
};

const linkUrl = [
  {
    name: 'home',
    link: '/'
  },
  {
    name: '01',
    link: '/ssg/1'
  },
  {
    name: '02',
    link: '/ssg/2'
  },
  {
    name: '03',
    link: '/ssg/3'
  },
  {
    name: '04',
    link: '/ssg/4'
  }
];

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();

  return {
    props: {
      data
    }
  };
};

export default function Home({ data }: any) {
  return (
    <>
      <div className=''>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <h2>Next SSG</h2>
          <Nav linkUrl={linkUrl} />
          <p>{JSON.stringify(data)}</p>
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