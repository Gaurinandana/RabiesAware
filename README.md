
# RabiesAware

**A Dual-ID Digital Registry & Surveillance System for Stray Dogs**

RabiesAware is a digital registry and surveillance platform designed to bridge the gap between **human safety** and **animal health**.

Using an innovative **Dual-ID access system**, the platform allows anyone to verify a stray dog’s rabies vaccination status — safely and instantly.

---

# 🚀 Project Overview

RabiesAware enables:

* ✅ Instant vaccination verification after a bite or scratch
* 📍 Crowdsourced stray dog reporting
* 🗺️ Hotspot mapping of unvaccinated dogs
* 🏥 Emergency guidance to nearby rabies clinics
* 🐶 NGO dashboard for vaccination tracking and booster scheduling

---

# 🛠️ How It Works — The Dual-ID System

Stray dogs can be unpredictable. RabiesAware provides **two safe ways** to access a dog's medical record.

## 1️⃣ QR Code Access (Close Range)

If a dog is calm or sleeping:

* Scan the QR code attached to the ear tag.
* The QR code links directly to that dog’s record in the app.
* Instantly view vaccination history and status.

## 2️⃣ Visual Tag Access (Safe Distance)

If a dog is aggressive or moving:

* Look at the **color-coded ear tag** (e.g., `Red #102`).
* Type `Red 102` into the app search bar.
* Access the same medical record — no physical interaction needed.

---

# 🏗️ System Architecture

## 📊 Database — Google Sheets

Acts as the **source of truth** and stores:

* Dog ID (Color + Number)
* Vaccination dates
* Vaccination status
* GPS coordinates
* Notes

---

## 🌐 Frontend — Streamlit

Built with Python and Streamlit:

* Search dogs by QR or Visual Tag
* View vaccination status
* Report new stray sightings
* Display status alerts
* Provide emergency instructions

---

## 🗺️ Mapping — Folium

* Generates interactive maps
* Displays stray hotspots
* Helps NGOs prioritize high-risk zones
* Visualizes crowdsourced reports

---

# 🎯 What This Project Achieves

## 🩺 Instant Verification

Victims of bites or scratches can quickly confirm whether the dog is vaccinated.

## 👥 Community Reporting

Citizens can pin stray dog sightings on a map — building a crowdsourced census.

## 🏥 NGO Tooling

Animal welfare organizations can:

* Track booster schedules
* Identify unvaccinated dogs
* Monitor vaccination coverage

## 🚨 Emergency Response

If a dog is marked **Unvaccinated**, the app:

* Displays warning alerts
* Provides immediate instructions
* Directs users to the nearest rabies clinic

---

# 🧰 Tech Stack

| Tool              | Purpose                   |
| ----------------- | ------------------------- |
| Python            | Core programming language |
| Streamlit         | Web app framework         |
| Google Sheets API | Cloud database            |
| Folium            | Interactive maps          |
| GitHub            | Code hosting & deployment |

---

# 📦 Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/rabiesaware.git
cd rabiesaware
```

---

## 2️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

If you don’t have a `requirements.txt` file yet:

```bash
pip install streamlit pandas folium gspread oauth2client
```

---

## 3️⃣ Set Up Google Sheets API

1. Create a Google Cloud Project
2. Enable Google Sheets API
3. Create a Service Account
4. Download the JSON credentials file
5. Share your Google Sheet with the service account email

Place the credentials file inside your project directory.

---

## 4️⃣ Run the App

```bash
streamlit run app.py
```

The app will automatically open in your browser.

---

# 🏷️ Physical Components (Prototype Demo)

To demonstrate the system:

* QR codes (generated online)
* Color-coded ear tags (e.g., Red #102)
* Cardboard, markers, and string for prototypes

---

# 👥 Team Roles

**Backend Developer**

* Connect Google Sheets API
* Manage data handling

**Frontend Developer**

* Build Streamlit UI
* Implement search & reporting

**Mapping Engineer**

* Integrate Folium heatmaps
* Handle GPS visualization

**Presentation & Deployment Lead**

* Generate QR codes
* Prepare mock tags
* Deploy via GitHub

---

# 📈 Future Improvements

* Offline mode for low-connectivity areas
* Mobile app version
* Integration with municipal databases

---

# ⚠️ Disclaimer

RabiesAware is a surveillance and verification tool.
It does not replace medical advice.
Always seek immediate professional medical treatment after any animal bite or scratch.

---

# 📜 License

MIT License (Recommended for open-source community projects)

---

# ❤️ Mission

RabiesAware exists to protect both **people** and **stray animals** by making vaccination data accessible, transparent, and actionable.

Together, we can reduce rabies risk through technology and community collaboration.
