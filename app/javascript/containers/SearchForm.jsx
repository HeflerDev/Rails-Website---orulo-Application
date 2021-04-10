import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../logic/fetchData';

const SearchForm = () => {
  const [cities, setCities] = useState(null);
  const [city, setCity] = useState(null);
  const [areas, setAreas] = useState(null);
  const [area, setArea] = useState(null);

  useEffect(() => {
    fetchData.fromAdressesCity('RS')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then((data) => setCities(data.cities))
      .catch((err) => console.error(err));

    fetchData.fromAdressesArea('RS', city)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then((data) => setAreas(data.areas))
      .catch((err) => console.error(err));
  }, [city]);

  // city
  // bairro
  // tipo
  // quartos

  const loadCities = () => (cities ? (
    <>
      {
          cities.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))
        }
    </>
  ) : (
    null
  ));

  const loadAreas = () => (areas ? (
    <>
      {
          areas.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))
        }
    </>
  ) : (
    null
  ));

  const handleCityChange = (event) => setCity(event.target.value);
  const handleAreaChange = (event) => setArea(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="board">
      <form className="col-6" onSubmit={handleSubmit}>
        <h2>Encontre aqui seu imóvel</h2>
        <label htmlFor="city">
          <select id="city" onChange={handleCityChange} name="city">
            <option>-- Selecione uma Cidade --</option>
            { loadCities() }
          </select>
        </label>
        <label htmlFor="area">
          <select id="area" onChange={handleAreaChange} name="area">
            <option>-- Selecione um Bairro --</option>
            { loadAreas() }
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
