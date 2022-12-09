import React from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Nav from '../../components/Nav';

const linkUrl = [
  {
    name: 'home',
    link: '/'
  },
  {
    name: '01',
    link: '/ssr/1'
  },
  {
    name: '02',
    link: '/ssr/2'
  },
  {
    name: '03',
    link: '/ssr/3'
  },
  {
    name: '04',
    link: '/ssr/4'
  }
];

const getData = async (id: number) => {
  const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
  return data;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params && params.id);
  let data = null;

  try {
    data = await getData(id);
  } catch (err) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data
    }
  };
};

export default function SSRID({ data }: any) {
  return (
    <>
      <div className=''>
        <main>
          <h2>Next SSR ID</h2>
          <Nav linkUrl={linkUrl} />
          <div className='data'>
            <p>name: {data.name}</p>
            <p>url: {data.url}</p>
          </div>
          <p>{JSON.stringify(data)}</p>
        </main>
      </div>

      <style jsx>{`
        .data {
          padding: 1rem 0;
        }

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
