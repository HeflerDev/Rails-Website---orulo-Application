/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import svgBathroom from '../../assets/images/svg/bathroom.svg';
import svgBedroom from '../../assets/images/svg/bedroom.svg';
import svgGarage from '../../assets/images/svg/garage.svg';
import svgRuler from '../../assets/images/svg/ruler.svg';
import svgSuite from '../../assets/images/svg/suite.svg';

const ProfileInfo = ({ data }) => {
  const {
    address: {
      area,
      city,
      number,
      state,
      street,
      street_type,
      zip_code,
    },
    min_area,
    min_bathrooms,
    min_bedrooms,
    min_parking,
    min_suites,
    finality,
    status,
  } = data;

  return (
    <div className="col-6 profile-info">
      <h2>Sobre o Imóvel</h2>
      <div className="queue around">
        <div queue column>
          <img src={svgBedroom} alt="bed-icon" />
          <div className="queue">{min_bedrooms}</div>
        </div>
        <div>
          <img src={svgRuler} alt="ruler-icon" />
          <div className="queue">{`${min_area}m²`}</div>
        </div>
        <div>
          <img src={svgGarage} alt="garage-icon" />
          <div className="queue">{min_parking}</div>
        </div>
        <div>
          <img src={svgBathroom} alt="bathroom-icon" />
          <div className="queue">{min_bathrooms}</div>
        </div>
        <div>
          <img src={svgSuite} alt="suite-icon" />
          <div className="queue">{min_suites}</div>
        </div>
      </div>
      <ul>
        <li>
          Finalidade:
          { finality }
        </li>
        <li>
          Estado:
          { status }
        </li>
        <li>
          Endereço:
          <ul>
            <li>
              UF:
              { state }
            </li>
            <li>
              Cidade:
              { city }
            </li>
            <li>
              Bairro:
              { area }
            </li>
            <li>
              Local:
              {`${street_type} ${street}`}
            </li>
            <li>
              Número:
              { number }
            </li>
            <li>
              CEP:
              { zip_code }
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

ProfileInfo.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.shape({
      area: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      street_type: PropTypes.string.isRequired,
      zip_code: PropTypes.string.isRequired,
    }).isRequired,
    min_area: PropTypes.number.isRequired,
    min_bathrooms: PropTypes.number.isRequired,
    min_bedrooms: PropTypes.number.isRequired,
    min_parking: PropTypes.number.isRequired,
    min_suites: PropTypes.number.isRequired,
    finality: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileInfo;
