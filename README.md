<img width="1909" height="921" alt="Screenshot 2026-02-21 182113" src="https://github.com/user-attachments/assets/c026399f-4e6b-4770-9d44-4c9645bb6f02" />
RabiesAware🎯
Basic Details
Team Name: TechTonic Minds
Team Members
Member 1: PARVATHY M - SOE,CUSAT
Member 2: GAURINANDANA A - SOE,CUSAT
Hosted Project Link
[https://rabies-aware.vercel.app/]

Project Description
RabiesAware is a digital registry and surveillance system for stray dogs that uses a Dual-ID system (QR codes and color-coded tags) to track vaccination status. It enables citizens to report sightings, helps NGOs identify hotspots, and provides authorities with actionable data to improve public safety and animal health.

The Problem statement
Stray dogs pose a significant public health risk due to the spread of rabies, yet tracking their vaccination status and locations is inefficient. Authorities and NGOs often lack accurate, real-time data, leading to delayed responses, wasted resources, and potential harm to both humans and animals.

The Solution
RabiesAware addresses this by creating a digital, crowdsourced registry and mapping system to monitor stray dogs, report sightings, and identify hotspots making it convinient for NGOs and ABC centre workers,helping them work more efficiently and saving time.Also provides a database to store vaccination details of strays to administer booster shots timely.

Technical Details
Technologies/Components Used
For Software:

Languages used: JavaScript,Python,CSS,JSON
Frameworks used: React,Express.js,React-Leaflet
Libraries used: React-Leaflet,Leaflet,gspread,pandas,Express.js,axios,react-geolocated,react-leaflet-markcluster
Tools used:VS Code,Node.js,Github,google sheets,google cloud console,React-Leaflet,Leaflet

Implementation
For Software:
Installation
npm install
Run
npm run start

Project Documentation
For Software:
Screenshots (Add at least 3)
<img width="1909" height="921" alt="Screenshot 2026-02-21 182113" src="https://github.com/user-attachments/assets/576c9ecd-8493-4923-a946-6517cf0e44d4" />
<img width="1856" height="870" alt="Screenshot 2026-02-21 182132" src="https://github.com/user-attachments/assets/202fe2ec-b5de-4800-a605-93c22b584d33" />
<img width="1691" height="411" alt="Screenshot 2026-02-21 182154" src="https://github.com/user-attachments/assets/3b9c4e34-a3ea-4ce9-8e3f-994dd294c98f" />
<img width="1858" height="811" alt="Screenshot 2026-02-21 182225" src="https://github.com/user-attachments/assets/387e3309-437a-4637-9225-5db4edf237c0" />

Diagrams
System Architecture:

Data Layer: Google Sheets stores vaccination info and stray dog sightings. 
Frontend: React + React-Leaflet displays an interactive map with reported sightings and highlights hotspots. 
Users: Citizens report sightings; NGOs and authorities use the map to plan interventions. 

Application Workflow:

Citizens report stray dog sightings → Data stored → React map shows sightings and hotspots for NGOs/authorities.
Ear tag having QR or Colour-code on dog ear -> scanned -> give vaccination details
Project Demo
Video
https://drive.google.com/file/d/11bqxO4yV_RUAepAWy1IFCyHC99-R47oE/view?usp=drivesdk

VIDEO SHOWS THE DATABASE TO STORE VACCINATED DOG DETAILS. THE WEBSITE ITS FEATURES AND HOW THRY WORK IN DETAIL.SHOWS HOW THE WEBSITE FETCHES A DATA OF VACCINATED DOG INFO WE HAVE GIVEN EARLIER IN THE DATABASE.SHOWS HOW LOCATION IS SHOWN IN THE MAP AND HOTSPOTS ARE IDENTIFIED WHEN LOCATION OF STRAY DOG SIGHTINGS ARE GIVEN.SHOWS HOW MEDICAL ASSISSTANCE IS SUGGESTED TO ENSURE CALMER APPROACH TO ANY STRAY DOG ACCIDENTS.

AI Tools Used (Optional - For Transparency Bonus)
If you used AI tools during development, document them here for transparency:

Tool Used: ChatGPT,Gemini,Versel,render

Purpose: vibecoding and deployement

Team Contributions
Gaurinandana A: database,mapping,api integration,backend(not used in the prototype currently)
Parvathy M: frontend development,deployment

License
This project is licensed under the [LICENSE_NAME] License - see the LICENSE file for details.

Common License Options:

MIT License (Permissive, widely used)
Apache 2.0 (Permissive with patent grant)
GPL v3 (Copyleft, requires derivative works to be open source)
Made with ❤️ at TinkerHub
