import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fetchData from '../logic/fetchData';
import Case from '../components/Case';

const Favorites = () => {
  const [buildingsObj, setBuildingsObj] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/likes/list')
      .then((res) => {
        const array = [];
        res.data.forEach((item) => {
          array.push(`building_ids[]=${item.building}&`);
        });
        fetchData.findBuildingsById(array.join(''))
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
            throw new Error();
          })
          .then((data) => {
            const { buildings } = data;
            setBuildingsObj(buildings);
          });
      });
  }, []);

  console.log(buildingsObj);

  return (buildingsObj ? (
    <>
      <h2 className="queue center">Favoritos</h2>
      {
        buildingsObj.map((data) => (
          <div id={data.id} key={data.id} className="col-12 col-l-3 case-container stack">
            <Case data={data} />
          </div>
        ))
      }
    </>
  ) : (
    null
  ));
};

export default Favorites;
