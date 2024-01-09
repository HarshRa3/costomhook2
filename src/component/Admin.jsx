import React from 'react';
import useFetch from '../hooks/useFetch';

const Admin = () => {
  const [data, loading, error] = useFetch('list_polls', 'get');
  

  console.log(data, loading, error);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching data</p>;
  }

  return (
    <>
    {data.data.map((e,i)=>{
        return (<div key={i}>
        <h1>{e.title}</h1>
        </div>)
    })}
    </>
  );
};

export default Admin;
