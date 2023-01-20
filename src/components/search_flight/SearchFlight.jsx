import React, { useState } from 'react';
import { setSearchFlight } from '../../redux/searchFlightSlice';
import './SearchFlight.scss';
import { useDispatch } from 'react-redux';

const SearchFlight = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    dispatch(setSearchFlight(search));
  };

  return (
    <div className="search">
      <h2 className="search_title">SEARCH FLIGHT</h2>
      <form className="search__flights-form" action="">
        <div className="search__icon"></div>
        <input
          className="search__input"
          type="text"
          placeholder="flight #"
          value={search}
          onChange={e => setSearch(e.target.value)}
        ></input>
        <button className="search__button" type="submit" onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFlight;
