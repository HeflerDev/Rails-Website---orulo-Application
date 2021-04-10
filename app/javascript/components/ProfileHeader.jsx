/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const ProfileHeader = ({ data }) => {
  const {
    description,
    default_image,
  } = data;

  return (
    <div className="board profile-page">
      <div className="col-6 queue center">
        <img src={default_image['520x280']} alt="" />
      </div>
      <div className="col-6 queue center">
        <p className="state-description">{description}</p>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    default_image: PropTypes.shape({
      '520x280': PropTypes.string.isRequired,
    }).isRequired,
  }),
};

ProfileHeader.defaultProps = {
  data: PropTypes.shape({
    description: 'Nenhum Detalhe Provido',
  }),
};

export default ProfileHeader;
