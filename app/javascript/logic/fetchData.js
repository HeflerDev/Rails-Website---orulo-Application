const authKey = 'Bearer VDqfisFJS9-8yiLluw3fvII-lILi7WjHNjDGAg9jMbU';

const fetchData = {

  findBuildingById(id) {
    return (
      fetch(`https://www.orulo.com.br/api/v2/buildings?building_ids[]=${id}`, {
        method: 'GET',
        headers: {
          Authorization: authKey 
        },
      })
    );
  },

  fromBuildings(page) {   
    return (
      fetch(`https://www.orulo.com.br/api/v2/buildings?results_per_page=12&page=${page}`, {
        method: 'GET',
        headers: {
          Authorization: authKey 
        },
       })
    );
  },

  fromAdressesCity(state) {
    return (
      fetch(`https://www.orulo.com.br/api/v2/addresses/cities?state=${state}`, {
        method: 'GET',
        headers: {
          Authorization: authKey
        },
      })
    );
  },

  fromAdressesArea(state, city) {
    return (
      fetch(`https://www.orulo.com.br/api/v2/addresses/areas?state=${state}&city=${city}`, {
        method: 'GET',
        headers: {
          Authorization: authKey
        },
      })
    );
  }
}

export default fetchData;
