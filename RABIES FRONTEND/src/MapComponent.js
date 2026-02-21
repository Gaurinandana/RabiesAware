import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Leaflet default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function LocationMarker({ setLocation }) {
  useMapEvents({
    click(e) {
      setLocation(e.latlng);
    },
  });
  return null;
}

const MapComponent = () => {
  const [location, setLocation] = useState(null);
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const kochiCenter = [9.9312, 76.2673];

  const handleGPS = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  };

  const handleSubmit = async () => {
    if (!phone) return alert("Please enter your number");
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:5000/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...location, phone }),
      });

      if (response.ok) {
        setStatus('success');
        setPhone('');
      }
    } catch (err) {
      alert("Backend not connected! Make sure node index.js is running.");
      setStatus('idle');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>📍 Kochi Rabies Watch</h2>
      
      <button onClick={handleGPS} style={{ marginBottom: '10px', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
        Share My Current Location
      </button>

      <MapContainer center={kochiCenter} zoom={12} style={{ height: '400px', width: '100%', borderRadius: '10px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker setLocation={setLocation} />
        {location && <Marker position={location}><Popup>Dog Sighting Here</Popup></Marker>}
      </MapContainer>

      {location && status !== 'success' && (
        <div style={{ marginTop: '15px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h4>Confirm Sighting</h4>
          <p>Location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}</p>
          <input 
            type="tel" 
            placeholder="Your Phone Number" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            style={{ padding: '8px', marginRight: '10px' }}
          />
          <button onClick={handleSubmit} style={{ padding: '8px 15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
            Submit Report
          </button>
        </div>
      )}

      {status === 'success' && (
        <div style={{ marginTop: '15px', padding: '20px', background: '#d4edda', color: '#155724', borderRadius: '5px' }}>
          <strong>✅ Report Noted!</strong> Your entry has been saved to the database.
          <button onClick={() => { setStatus('idle'); setLocation(null); }} style={{ marginLeft: '15px' }}>New Report</button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;