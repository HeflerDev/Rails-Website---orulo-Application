import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../logic/fetchData';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from '../components/ProfileInfo';
import GMap from '../components/GMap';

const StateProfile = ({ match: { params: { id } } }) => {
  const [stateData, setStateData] = useState(null);

  useEffect(() => {
    fetchData.findBuildingById(id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then((data) => {
        setStateData(data.buildings.shift());
      })
      .catch((err) => console.error(err));
  }, []);

  if (!stateData) {
    return <div>Loading</div>;
  }

  return (
    <div className="stack">
      <ProfileHeader data={stateData} />
      <div className="board">
        <GMap
          lat={stateData.address.latitude}
          lng={stateData.address.longitude}
        />
        <ProfileInfo data={stateData} />
      </div>
    </div>
  );
};

StateProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default StateProfile;
