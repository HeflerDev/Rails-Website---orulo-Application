import React from 'react';

const Profile = ({ data }) => {
  const {
    description,
    min_price,
    min_area,
    number_of_floors,
    status,
    finality,
    address,
    default_image,
  } = data;

  return (
    <div className="board profile-page">
      <div className="col-l-6 queue center">
        <img src={default_image['520x280']} alt="" />
      </div>
      <div className="col-6 queue center">
        <p className="state-description">{description}</p>
      </div>
      <div className="col-6">
        <div id="map" />
      </div>
      <ul>
        <li><strong>Informacoes</strong></li>
        <li />
      </ul>
    </div>
  );
};

export default Profile;
