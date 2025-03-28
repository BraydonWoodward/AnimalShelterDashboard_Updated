# AnimalShelterDashboard_Updated
A modern, interactive dashboard for viewing and managing animal shelter data. This application uses a Node.js/Express backend and a React/Vite frontend, featuring search and filtering functionality, interactive tables, and a map view.

# Features
Dashboard View:
Displays a table of animal records with searchable and clickable rows.

Search Functionality:
Filter animal records by name (or optionally breed/animal type) using a dedicated search box.

Animal Details:
When a table row is clicked, a details pane pops up showing additional information about the selected animal along with an interactive map showing its location.

Responsive Design:
The app is designed to be responsive and adapts to different screen sizes using CSS Flexbox.

# Technologies
Frontend:
    -React (with JSX)
    -Vite for development and bundling
    -Axios for HTTP requests
    -React Router for navigation
    -Leaflet/React-Leaflet for mapping
Backend:
    -Node.js with Express
    -(Optional) MongoDB for data persistence (initially using in-memory data)
Styling:
    -Global CSS using rem units for responsive typography
    -CSS Flexbox for layout and responsive design

# Getting Started

# Pre-requisites: 
    -Node.js and npm installed on your machine
    -(Optional) MongoDB for data persistence 

# Installation:

1. Clone the Repository
    git clone https://github.com/BraydonWoodward/AnimalShelterDashboard_Updated.git
    cd AnimalShelterDashboard_updated

2. Setup the backend
    cd backend
    npm start

3. Setup the Frontend
    A. Install the app
        cd ./frontend/animal-shelter-dashboard
        npm install

    B. Create a .env file in the frontend/animal-shelter-dashboard folder with:
        VITE_API_URL=http://localhost:5000/api/animals
    
    C. Start the frontend server
        npm run dev

4. Open your browser
    Navigate to http://localhost:3000/ to see the dashboard




