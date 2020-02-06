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
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number" name="minSize" id="minSize"
              value={minSize} onChange={handleChange} className="size-input"
            />
            <input
              type="number" name="maxSize" id="maxSize"
              value={maxSize} onChange={handleChange} className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox" name="breakfast" id="breakfast"
              checked={breakfast} onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox" name="pets" id="pets"
              checked={pets} onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section >
  );
}

RoomFilter.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default RoomFilter;
