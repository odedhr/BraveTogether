import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { MapProps } from "./MapContainer";
import Popover from "./PopOver";
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
  const { events, selectedCategories, heroes } = props;
  const AnyReactComponent = (data: any) => (
    <Popover interest={data.interest} hero={data.hero}></Popover>
  );
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
      <div style={{ height: "800px", width: "90%", cursor: "crosshair" }}>
        <GoogleMapReact
          ref={map}
          bootstrapURLKeys={{ key: "AIzaSyASaCN4whf5a_g5zM72cZgqn8jQTiJ8HbQ", language: "he" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onClick={(value: GoogleMapReact.ClickEventValue) => onMapClick(value.lat, value.lng)}
        >
          {events
            .filter((event) => {
              let found = false;
              heroes.forEach((hero) => {
                if (hero.id === event.hero_id) found = true;
              });
              if (found) return event;
            })
            .filter((event) => {
              if (
                !selectedCategories ||
                (Array.isArray(selectedCategories) && selectedCategories.length == 0)
              )
                return event;
              else if (selectedCategories.includes(event.tags)) {
                return event;
              }
            })
            .map((marker: any) => {
              return (
                <AnyReactComponent
                  lat={marker.lat}
                  lng={marker.long}
                  hero={heroes.find((hero) => hero.id === marker.hero_id)!}
                  interest={marker.tags}
                />
              );
            })}
        </GoogleMapReact>
      </div>
    </MapWrapper>
  );
}
