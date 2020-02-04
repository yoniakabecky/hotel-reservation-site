import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import defaultBcg from '../images/room-1.jpeg';

import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';

export class SingleRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.match.params.type,
      defaultBcg
    }
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.type);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
        </Link>
        </div>
      );
    }

    const {
      name, description,
      capacity, size,
      price, extras,
      breakfast, pets,
      images
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg}>
          {/* <StyledHero img={images[0] || defaultBcg}> */}
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
          </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((image, index) => <img src={image} key={index} alt={name} />)}
            {/* {images.map((image, index) => <img src={image} key={index} alt={name} />)} */}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>max capacity : {capacity} {capacity > 1 ? "people" : "person"}</h6>
              <h6>{pets ? "" : "no"} pets allowed</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((extra, index) =>
              <li key={index}>
                - {extra}
              </li>
            )}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
