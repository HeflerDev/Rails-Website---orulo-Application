import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Case from '../components/Case';
import fetchData from '../logic/fetchData';

const Showcase = ({ match: { params: { page } } }) => {
  const [stateData, setStateData] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    setStateData({...stateData, isLoading: true});
    fetchData.fromBuildings(page)
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
  }, [page]);

  const renderNavButtons = (current, total) => {
    if (current > 1) {
      if (current >= total) {
        return (
          <>
            <Link to={`/query/${current - 1}`} >{ current - 1 }</Link>
            <Link to={`/query/${current}`} >{ current }</Link>
          </>
        );
      }
      return (
        <>
          <Link to={`/query/${current - 1}`} >{ current - 1 }</Link>
          <Link to={`/query/${current}`} >{ current }</Link>
          <Link to={`/query/${current + 1}`}>{ current + 1}</Link>
          <Link to={`/query/${total}`}>{ `...${total}` }</Link>
        </>
      )
    }
    return (
      <>
        <Link to={`/query/${current}`} >{ current }</Link>
        <Link to={`/query/${current + 1}`}>{ current + 1}</Link>
        <Link to={`/query/${total}`}>{ `...${total}` }</Link>
      </>
    );
  }

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
      <div className="queue center bottom-nav-container">
        { renderNavButtons(stateData.data.page, stateData.data.total_pages) }
      </div>
    </div>
  );
}

Showcase.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string,
    }),
  }),
}

Showcase.defaultProps = {
  match: {
      params: {
        page: '1',
      },
    },
}

export default Showcase;
