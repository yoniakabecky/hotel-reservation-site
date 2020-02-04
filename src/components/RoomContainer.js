import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {
  // RoomConsumer, 
  withRoomConsumer
} from '../context';
import Loading from './Loading';

const RoomContainer = ({ context }) => {
  const {
    loading, sortedRooms, rooms
  } = context;

  if (loading) { return <Loading /> }

  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// export default RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         const {
//           loading, sortedRooms, rooms
//         } = value;

//         if (loading) { return <Loading /> }

//         return (
//           <div>
//             hello from rooms container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         )
//       }}
//     </RoomConsumer>
//   );
// }