import React from 'react';
import { getData } from '../src/firebase';

export const getStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      data,
    },
  };
};

const TestSSG = ({ data }) => {
  return (
    <div>
      <h2>{data?.title || 'Dataを取得できませんでした'}</h2>
    </div>
  );
};

export default TestSSG;
