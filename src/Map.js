import React from "react";
import "./LeafletMap.css";
import {
  Map as LeafletMap,
  TileLayer,
  GeoJSON as GeoJSONLayer,
} from "react-leaflet";
import center from "@turf/center";

function Map(props) {
  if (props.geoJson) {
    return (
      <LeafletMap
        center={center(props.geoJson).geometry.coordinates.reverse()}
        zoom={11}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <GeoJSONLayer key={props.geoJson} data={props.geoJson} />
      </LeafletMap>
    );
  } else {
    return <div></div>;
  }
}
export default Map;
