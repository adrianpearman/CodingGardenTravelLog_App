import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { listLogEntries } from "../util/api";
import LogMarker from "./LogMarker";
import AddEntryMarker from "./AddEntryMarker";

const App = () => {
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [viewport, setViewPort] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3
  });

  const getEntries = async () => {
    setLogEntries(await listLogEntries());
  };

  useEffect(() => {
    getEntries();
  }, []);

  const showMarkerPopup = event => {
    const [longitude, latitude] = event.lngLat;
    setAddEntryLocation({
      latitude,
      longitude
    });
  };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={"mapbox://styles/adrianpearman12/ck6iix7kv0f2e1jpeh8lgiy7l"}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewPort}
      onDblClick={showMarkerPopup}
    >
      {logEntries.map(entry => {
        return (
          <LogMarker
            key={entry._id}
            entry={entry}
            viewport={viewport}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />
        );
      })}
      {addEntryLocation ? (
        <AddEntryMarker
          addEntryLocation={addEntryLocation}
          viewport={viewport}
          setAddEntryLocation={setAddEntryLocation}
          getEntries={getEntries}
        />
      ) : null}
    </ReactMapGL>
  );
};

export default App;
