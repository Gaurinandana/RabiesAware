const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 5000;
const DATA_FILE = "sightings.json";

app.use(cors());
app.use(bodyParser.json());

// Load sightings from JSON file
let sightings = [];
if (fs.existsSync(DATA_FILE)) {
  sightings = JSON.parse(fs.readFileSync(DATA_FILE));
}

// GET all sightings
app.get("/sightings", (req, res) => {
  res.json(sightings);
});

// POST new sighting
app.post("/sightings", (req, res) => {
  const { lat, lng } = req.body;
  if (lat == null || lng == null)
    return res.status(400).send("lat/lng required");

  const newSighting = { lat, lng };
  sightings.push(newSighting);

  // Save to JSON file
  fs.writeFileSync(DATA_FILE, JSON.stringify(sightings, null, 2));

  res.status(201).json(newSighting);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));