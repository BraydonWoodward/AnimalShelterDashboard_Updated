# AnimalShelterDashboard_Updated
A modern, interactive dashboard for viewing and managing animal shelter data. This application uses a Node.js/Express backend and a React/Vite frontend, featuring search and filtering functionality, interactive tables, and a map view.

# Features
Dashboard View:
Displays a table of animal records with searchable and clickable rows.

Search Functionality:
Filter animal records by name (or optionally breed/animal type) using a dedicated search box.

Animal Details Modal:
Clicking a table row pops up a modal with additional information about the selected animal along with an interactive map showing its location.

Responsive Design:
The app is designed to be responsive and adapts to different screen sizes using CSS Flexbox.

Dockerized Enviroment:
All components—the frontend, backend, and MongoDB database—run in a Docker Compose network for easy deployment and consistency across environments.

# Technologies
Frontend:
    -React (with JSX)
    -Vite for development and bundling
    -Axios for HTTP requests
    -React Router for navigation
    -Leaflet/React-Leaflet for mapping
Backend:
    -Node.js with Express
    -MongoDB for data persistence, accessed via Mongoose
Styling:
    -Global CSS using rem units for responsive typography
    -CSS Flexbox for layout and responsive design
Containerization:
    -Docker for containerizeing the backend, frontend, and database
    -Docker Compose for orchestration

# Getting Started

# Pre-requisites: 
    -Docker Destop or Docker and Docker Compose
    -Node.js and npm installed on your machine
    -MongoDB for data persistence 

**Upon starting this program will seed the database with mockAnimal Data. To stop this seeding remove the seeding script from the backend dockerfile.**
# Installation:

1. Clone the Repository
    git clone https://github.com/BraydonWoodward/AnimalShelterDashboard_Updated.git
    cd AnimalShelterDashboard_updated

2. Docker Compose Setup
    A Docker Compose file is provided at the root of the repository. It defines three services: backend, frontend, and MongoDb.

    Start the containers with: 
        docker-compose up --build

3. Open your browser
    Navigate to http://localhost:3000/ to see the dashboard





