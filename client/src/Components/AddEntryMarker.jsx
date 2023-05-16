// NPM Modules
import { Marker, Popup } from "react-map-gl";
// Components
import LogEntryForm from "./LogEntryForm";
import SVGIcon from "./SVGIcon";

const AddEntryMarker = (props) => {
  const { addEntryLocation, viewState, setAddEntryLocation, getEntries } =
    props;
  return (
    <>
      <Marker
        latitude={addEntryLocation.latitude}
        longitude={addEntryLocation.longitude}
        offset={[10, 10]}
      >
        <SVGIcon className={"marker marker-secondary"} zoom={viewState.zoom} />
      </Marker>
      <Popup
        anchor="top"
        closeButton={true}
        closeOnClick={false}
        dynamicPosition={true}
        latitude={addEntryLocation.latitude}
        longitude={addEntryLocation.longitude}
        onClose={() => setAddEntryLocation(null)}
      >
        <div className="popUp">
          <LogEntryForm
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
            onClose={() => {
              setAddEntryLocation(null);
              getEntries();
            }}
          />
        </div>
      </Popup>
    </>
  );
};

export default AddEntryMarker;
