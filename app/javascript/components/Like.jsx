import React, { useState, useEffect } from 'react';
import axios from 'axios';

import svgLike from '../../assets/images/svg/like.svg';
import svgDislike from '../../assets/images/svg/dislike.svg';

const Like = (props) => {
  const [totalLikes, setTotalLikes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/likes/list/')
      .then((res) => {
        const arr = [];
        res.data.forEach((item) => {
          arr.push(item.building);
        });
        setTotalLikes(arr);
      });
  }, []);

  const { id } = props.data;
  const { user } = props.userInfo;

  const handleClickOnDislike = () => {
    console.log('Not Implemented');
  };

  const handleClickOnLike = () => {
    const like = {
      user_id: user.id,
      building: id,
    };
    axios.post('http://localhost:3001/likes/create', { like }, { withCredentials: true })
      .then((res) => {
        console.log(res);
      });
  };

  return totalLikes.includes(parseInt(id)) ? (
    <div className="queue end">
      <img src={svgDislike} alt="" className="like-btn" onClick={handleClickOnDislike} />
    </div>
  ) : (
    <div className="queue end">
      <img src={svgLike} alt="" className="like-btn" onClick={handleClickOnLike} />
    </div>
  );
};

export default Like;
