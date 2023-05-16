// NPM Modules
import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
// Util Functions
import { listLogEntry } from "../utils/api";
// Components
import AddEntryMarker from "./AddEntryMarker";
import LogMarker from "./LogMarker";

const App = () => {
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [logEntries, setLogEntries] = useState([]);
  const [viewState, setViewState] = useState({
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 3.5,
  });
  //
  const mapSizeStyling = {
    width: "100vw",
    height: "100vh",
  };

  const getEntries = async () => {
    const { data } = await listLogEntry();
    setLogEntries(data);
  };

  const showMarkerPopup = (event) => {
    const { lat, lng } = event.lngLat;
    setAddEntryLocation({
      latitude: lat,
      longitude: lng,
    });
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <Map
      doubleClickZoom={false}
      onDblClick={showMarkerPopup}
      initialViewState={{ ...viewState }}
      mapStyle={"mapbox://styles/adrianpearman12/ck6iix7kv0f2e1jpeh8lgiy7l"}
      mapboxAccessToken={
        "pk.eyJ1IjoiYWRyaWFucGVhcm1hbjEyIiwiYSI6ImNsaHFvb3A0aTI2bDYzbXBzcHBkN21kYzkifQ.EcneEzv2CmnH2Zaq3ZTk4w"
      }
      style={mapSizeStyling}
    >
      {logEntries.length > 0 ? (
        <>
          {logEntries.map((entry) => {
            return (
              <LogMarker entry={entry} key={entry._id} viewState={viewState} />
            );
          })}
        </>
      ) : null}

      {addEntryLocation ? (
        <AddEntryMarker
          addEntryLocation={addEntryLocation}
          getEntries={getEntries}
          setAddEntryLocation={setAddEntryLocation}
          viewState={viewState}
        />
      ) : null}
    </Map>
  );
};

export default App;
