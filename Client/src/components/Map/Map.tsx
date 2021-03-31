import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { MapProps } from "./MapContainer";

const StyledButton = styled(Button)`
  width: 100px;
`;
const MapWrapper = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export default function Map(props: MapProps) {
  const { events } = props;
  const AnyReactComponent = ({ text }: any) => <div>{text}</div>;
  const [markers, setMarkers] = React.useState<any>([]);
  const [creatingEvent, setCreatingEvent] = React.useState(false);
  const map = React.useRef(null);
  const defaultProps = {
    center: {
      lat: 32.07,
      lng: 34.78,
    },
    zoom: 11,
  };
  const onMapClick = (lat: number, long: number) => {
    if (creatingEvent) {
      setCreatingEvent(false);
      // openModal();
      // createNewEvent({ address: "", hero: "", lat, long, manager_id: "", topic: "" });
      setMarkers([
        ...markers,
        {
          lat,
          long,
        },
      ]);
    }
  };
  const onCreateEventButton = () => {
    setCreatingEvent(true);
  };
  return (
    <MapWrapper>
      {/* <StyledButton onClick={onCreateEventButton} variant="contained" color="primary">
        צור מפגש
      </StyledButton> */}
      <div style={{ height: "800px", width: "90%", cursor: "crosshair" }}>
        <GoogleMapReact
          ref={map}
          bootstrapURLKeys={{ key: "AIzaSyASaCN4whf5a_g5zM72cZgqn8jQTiJ8HbQ", language: "he" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onClick={(value: GoogleMapReact.ClickEventValue) => onMapClick(value.lat, value.lng)}
        >
          {events.map((marker) => {
            return <AnyReactComponent lat={marker.lat} lng={marker.long} text="My Marker" />;
          })}
        </GoogleMapReact>
      </div>
    </MapWrapper>
  );
}
