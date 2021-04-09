import React, { useEffect, useState } from 'react';
import Case from '../components/Case';

const Showcase = () => {
  const [stateData, setStateData] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    setStateData({...stateData, isLoading: true});
    fetch('https://www.orulo.com.br/api/v2/buildings', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer VDqfisFJS9-8yiLluw3fvII-lILi7WjHNjDGAg9jMbU'
      },
   })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Couldn\'t Connect to the Api');
    })
    .then(data => {
      setStateData({...stateData, data: data, isLoading: false });
    })
      .catch((err) => {
        setStateData({...stateData, error: err, isLoading: false});
      });
  }, []);

  if (stateData.isLoading) {
    return <p>Loading...</p>
  }

  if (stateData.error) {
    return <p>Uh oh! An Error has Ocurred</p>
  }

  return (
    <div className="stack">
      <div className="board">
        {
          stateData.data.buildings.map((data) => (
            <div key={data.id} className="col-12 col-l-3 case-container">
              <Case data={data} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Showcase;
