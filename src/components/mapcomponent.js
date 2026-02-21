// MapComponent.js
// Ready to be integrated into a React website

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";

const MapComponent = ({ backendUrl }) => {
  const [sightings, setSightings] = useState([]);
  const [newSighting, setNewSighting] = useState({ lat: null, lng: null });
  const [addressInput, setAddressInput] = useState("");

  // Fetch sightings every 5 seconds for real-time updates
  useEffect(() => {
    fetchSightings();
    const interval = setInterval(fetchSightings, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchSightings = async () => {
    try {
      const res = await axios.get(`${backendUrl}/sightings`);
      setSightings(res.data);
    } catch (err) {
      console.error("Error fetching sightings:", err);
    }
  };

  // Convert manually typed address to lat/lng
  const handleAddressBlur = async () => {
    if (!addressInput) return;
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          addressInput
        )}`
      );
      if (res.data.length > 0) {
        setNewSighting({
          lat: parseFloat(res.data[0].lat),
          lng: parseFloat(res.data[0].lon),
        });
      }
    } catch (err) {
      console.error("Error with geocoding:", err);
    }
  };

  // Use current device location
  const useCurrentLocation = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported");
    navigator.geolocation.getCurrentPosition(
      (position) =>
        setNewSighting({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
      () => alert("Unable to retrieve your location")
    );
  };

  // Submit new sighting to backend
  const reportSighting = async () => {
    if (!newSighting.lat || !newSighting.lng) {
      return alert("Please select a location first");
    }
    try {
      await axios.post(`${backendUrl}/sightings`, newSighting);
      setNewSighting({ lat: null, lng: null });
      setAddressInput("");
      fetchSightings();
    } catch (err) {
      console.error("Error reporting sighting:", err);
    }
  };

  // Calculate hotspots
  const hotspotMap = {};
  sightings.forEach((s) => {
    const key = `${s.lat.toFixed(3)}_${s.lng.toFixed(3)}`;
    hotspotMap[key] = (hotspotMap[key] || 0) + 1;
  });

  const hotspots = Object.keys(hotspotMap).map((key) => {
    const [lat, lng] = key.split("_").map(Number);
    const count = hotspotMap[key];
    let color = count > 8 ? "red" : count > 5 ? "orange" : "green";
    return { lat, lng, color, count };
  });

  // Default map center (can be changed)
  const defaultCenter = [28.6139, 77.209]; // Delhi coordinates as example

  return (
    <div>
      {/* Input controls */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Type address manually"
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
          onBlur={handleAddressBlur}
          style={{ marginRight: "5px", width: "250px" }}
        />
        <button onClick={useCurrentLocation} style={{ marginRight: "5px" }}>
          Use My Location
        </button>
        <button onClick={reportSighting}>Report Sighting</button>
      </div>

      {/* Map */}
      <MapContainer
        center={defaultCenter}
        zoom={12}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Clustered markers */}
        <MarkerClusterGroup>
          {sightings.map((s, idx) => (
            <Marker key={idx} position={[s.lat, s.lng]} />
          ))}
        </MarkerClusterGroup>

        {/* Hotspot circles */}
        {hotspots.map((h, idx) => (
          <Circle key={idx} center={[h.lat, h.lng]} radius={50} color={h.color} />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;