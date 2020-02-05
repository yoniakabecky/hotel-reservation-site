import React from 'react';
import PropTypes from 'prop-types';
import Room from '../components/Room';

const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomsList">
      <div className="roomsList-center">
        {rooms.map(room => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
}

RoomList.propTypes = {
  rooms: PropTypes.array
};

export default RoomList;
