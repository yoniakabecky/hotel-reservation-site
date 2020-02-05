import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RoomContext } from '../context';
import Title from '../components/Title';


const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type, capacity,
    price, minPrice, maxPrice,
    minSize, maxSize,
    breakfast, pets
  } = context;

  // get unique type
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((type, index) => {
    return <option value={type} key={index}>{type}</option>
  })

  let people = getUnique(rooms, "capacity");
  people = people.map((person, index) => {
    return <option value={person} key={index}>{person}</option>
  })

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* select guests */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
            {people}
          </select>
        </div>
        {/* end select guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">
            room price ${price}
          </label>
          <input
            type="range" name="price" min={minPrice} max={maxPrice} id="price"
            value={price} onChange={handleChange} className="form-control"
          />
        </div>
        {/* end of room price */}
      </form>
    </section >
  );
}

RoomFilter.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default RoomFilter;
