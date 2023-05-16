// NPM Modules
import { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import SVGIcon from "./SVGIcon";

const LogMarker = ({ entry, viewState }) => {
  // State
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setShowPopup(true);
      }}
    >
      <Marker latitude={entry.latitude} longitude={entry.longitude}>
        <SVGIcon className={"marker"} zoom={viewState.zoom} />
      </Marker>
      {showPopup ? (
        <Popup
          anchor="top"
          closeButton={true}
          closeOnClick={true}
          dynamicPosition={true}
          latitude={entry.latitude}
          longitude={entry.longitude}
          onClose={() => setShowPopup(false)}
        >
          <div className="popUp">
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
            <small>
              Visit Date:
              {new Date(entry.visitDate).toLocaleDateString()}
            </small>
          </div>
        </Popup>
      ) : null}
    </div>
  );
};

export default LogMarker;
