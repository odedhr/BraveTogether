import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Button from "@material-ui/core/Button";
export interface IMapProps {}

export default function Map(props: IMapProps) {
  const AnyReactComponent = ({ text }: any) => <div>{text}</div>;
  const [markers, setMarkers] = React.useState<any>([]);
  const defaultProps = {
    center: {
      lat: 32.07,
      lng: 34.78,
    },
    zoom: 11,
  };
  const onClick = (lat: number, lng: number) => {
    setMarkers([
      ...markers,
      {
        lat,
        lng,
      },
    ]);
  };

  return (
    <div style={{ height: "800px", width: "100%", display: "flex", justifyContent: "center" }}>
      <Button variant="contained" color="primary">
        צור מפגש
      </Button>
      <div style={{ height: "800px", width: "90%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyASaCN4whf5a_g5zM72cZgqn8jQTiJ8HbQ", language: "he" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onClick={(value: GoogleMapReact.ClickEventValue) => onClick(value.lat, value.lng)}
        >
          {markers.map((marker: any) => {
            return <AnyReactComponent lat={marker.lat} lng={marker.lng} text="My Marker" />;
          })}
        </GoogleMapReact>
      </div>
    </div>
  );
}
