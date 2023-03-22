import React, { useState } from "react";
import "./location.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
function Location() {

  const [viewState, setViewState] = useState({
    longitude: 106.700981,
    latitude: 10.776530,
    zoom: 8,
  });
  return (
    <div className="AppMap">
      <div className="Container">
        <div className="Wrapper">
          <h2>Vị trí khách sản</h2>
          <div className="Map">
            <Map
              {...viewState}
              mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
              style={{ width: "100%", height: "65vh" }}
              mapStyle="mapbox://styles/mapbox/streets-v12"
              onMove={(evt) => {
                setViewState(evt.viewState)
              }
              }
            >
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
