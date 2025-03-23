import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css' // Global styles
import App from './App' // Main app component
import 'leaflet/dist/leaflet.css'; // Import leaflet's CSS 

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}