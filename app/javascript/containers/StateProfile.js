import React, { useState, useEffect } from 'react';
import fetchData from '../logic/fetchData';
import Profile from '../components/Profile';

const StateProfile = ({ match: { params: {id} } }) => {
  const [stateData, setStateData] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    fetchData.findBuildingById(id)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then(data => { 
        setStateData(data);
      })
      .catch(err => console.error(err));

  }, []);
  
  if (!stateData) {
    return <div>Loading</div>
  }

  return (
    <>
      {
        stateData.buildings.map(obj => (
          <div key='one' className="stack">
            <Profile data={obj} />
          </div>
        ))
      }
    </>
  );
}

export default StateProfile;
