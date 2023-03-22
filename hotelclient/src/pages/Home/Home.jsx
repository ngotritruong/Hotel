import React from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import Location from "../../components/location/Location";
import { Link } from "react-router-dom";
import FeaturedRooms from "../../components/FeaturedRooms";


const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Location />
      <FeaturedRooms />
    </>
  );
};

export default Home;
