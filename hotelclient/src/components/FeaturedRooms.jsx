import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading } = this.context;


    return (
      <section className="featured-rooms">
        <Title title={"Featured Rooms"} />
        <div className="featured-rooms-center">
          {loading ? <Loading /> :
            <>
              <Room />
              <Room />
              <Room />
              <Room />
              <Room />
              <Room />
              <Room />
              <Room />
              <Room />
              <Room />
              <Room />
              <Room />
            </>


          }
        </div>
      </section>
    );
  }
}
