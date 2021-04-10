/* eslint-disable no-undef */

import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import PropTypes from 'prop-types';

const GMap = ({ lat, lng }) => {
  const loadMap = () => {
    const loader = new Loader({
      apiKey: 'AIzaSyD73c4nPx2rbA5f1bKg5MkklwjPJUUNWSo',
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat, lng },
        zoom: 16,
      });

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Hello World',
      });
      return marker;
    });
  };

  return (
    <div className="col-6 queue center">
      <div id="map" />
      { loadMap() }
    </div>
  );
};

GMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default GMap;
