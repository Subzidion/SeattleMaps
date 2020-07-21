import React, { useState, useEffect } from "react";
import Map from "./Map";

function SeattleMaps() {
  const [mapGeometry, setMapGeometry] = useState();
  useEffect(() => {
    fetch(
      "http://data-seattlecitygis.opendata.arcgis.com/datasets/de58dc3e1efc49b782ab357e044ea20c_9.geojson"
    )
      .then((response) => response.json())
      .then((data) => {
        setMapGeometry(data);
      });
  }, []);

  return <Map geoJson={mapGeometry} />;
}
export default SeattleMaps;
