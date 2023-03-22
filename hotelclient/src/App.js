import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Room/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error/Error";
import Navbar from "./components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Location from "./components/location/Location";
function App() {
  var location = useLocation();
  var slug = location.pathname.slice(7, location.pathname.length);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loca" element={<Location />} />
        <Route path="/rooms/" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom slug={slug} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
