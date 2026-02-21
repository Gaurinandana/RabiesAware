import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
// Corrected CSS paths to fix your terminal error
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const MapComponent = () => {
  const [sightings, setSightings] = useState([]);
  const kochiPos = [9.9312, 76.2673];

  useEffect(() => {
    // Demo sighting data
    setSightings([{ lat: 9.9312, lng: 76.2673 }]);
  }, []);

  return (
    <MapContainer center={kochiPos} zoom={13} style={{ height: "350px", width: "100%", borderRadius: '8px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerClusterGroup>
        {sightings.map((s, idx) => (
          <Marker key={idx} position={[s.lat, s.lng]} />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapComponent;