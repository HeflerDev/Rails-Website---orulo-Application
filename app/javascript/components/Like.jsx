import React, { useState, useEffect } from 'react';
import axios from 'axios';

import svgLike from '../../assets/images/svg/like.svg';

const Like = (props) => {
  const { id } = props.data;
  const handleClick = () => {
    const user = {
      liked_buildings_id: id,
    };
    axios.put(`http://localhost:3001/api/v1/update/${id}`, { user }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        if (res.data.status === 'updated') {
          console.log('success');
        } else {
          console.log('fuck');
        }
      });
  };

  return (
    <div className="queue end">
      <img src={svgLike} alt="" className="like-btn" onClick={handleClick} />
    </div>
  );
};

export default Like;
