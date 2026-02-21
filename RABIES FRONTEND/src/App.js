import React, { useState } from 'react';
import './App.css';
import MapComponent from './MapComponent';

function App() {
  const [tagId, setTagId] = useState('');
  const [dogData, setDogData] = useState(null);
  const [location, setLocation] = useState('');
  const [hospitalData, setHospitalData] = useState(null);

  const handleDogSearch = () => {
    const mockDogs = [{ DogID: "RED108", TagNumber: "108", Status: "VACCINATED", Date: "01-02-2026" }];
    setDogData(mockDogs.find(d => d.DogID === tagId.toUpperCase()));
  };

  const handleHospitalSearch = () => {
    setHospitalData({ name: "City Medical Center", distance: "0.8 km", phone: "+91 484 2345678" });
  };

  return (
    <div className="App">
      <header className="emergency-header">
        <h1>RabiesAware Dashboard</h1>
        <div className="emergency-actions">
          <button className="btn-emergency">📞 CALL 112</button>
          <button className="btn-firstaid">🩹 FIRST AID</button>
        </div>
      </header>

      <main className="main-content">
        {/* LEFT COLUMN */}
        <div className="search-side">
          <div className="card">
            <h2>🌍 Live Sighting Heatmap</h2>
            <MapComponent backendUrl="http://localhost:5000" />
          </div>

          <div className="card">
            <h2>🔍 Verify Vaccination Tag</h2>
            <div className="input-group">
              <input type="text" placeholder="Tag ID..." value={tagId} onChange={(e) => setTagId(e.target.value)} />
              <button className="btn-verify" onClick={handleDogSearch}>VERIFY</button>
            </div>
            {dogData && (
              <div className="status-box green-box">
                <p><strong>Status:</strong> {dogData.Status}</p>
                <p>Expiry: {dogData.Date}</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <aside className="report-side">
          <div className="report-card">
            <h2>📢 ABC Center Status</h2>
            <p>Sightings reported on the map are sent here.</p>
            <div className="status-box" style={{background: '#f9f9f9', border: '1px solid #ddd'}}>
                <strong>Kochi Center:</strong> <span style={{color: 'green'}}>ACTIVE</span>
            </div>
          </div>

          <div className="card">
            <h2>🏥 Nearby Medical Help</h2>
            <div className="input-group">
              <input type="text" placeholder="Enter City..." value={location} onChange={(e) => setLocation(e.target.value)} />
              <button className="btn-verify" onClick={handleHospitalSearch}>SEARCH</button>
            </div>
            {hospitalData && (
              <div className="status-box red-box">
                <h3>📍 {hospitalData.name}</h3>
                <p>Distance: {hospitalData.distance}</p>
                <button className="btn-call-small">CALL NOW</button>
              </div>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;