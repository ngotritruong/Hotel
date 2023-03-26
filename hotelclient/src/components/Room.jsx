import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import room1 from "../images/room-1.jpeg";
export default function Room({ room }) {
  
  return (
    <article className="room">
      <div className="img-container">
        <img src={room1} alt="single room" />
        <div className="price-top">
          <h6>10000VND</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <div className="roomDec">
        <span>Room type: Vip</span>
        <span className="">Name: 2 </span>
        <br />
        <span>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, magnam nobis saepe quae a reiciendis autem ipsa modi pariatur rem beatae laboriosam vitae. Ipsam recusandae molestiae quaerat quae! Accusamus, dicta.</span>
      </div>
    </article>
  );
}


