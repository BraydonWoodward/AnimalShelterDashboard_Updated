import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Library for building the map component

// Import the default marker images so Vite copies them into /assets so they work inside docker
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Override Leaflet’s default icon URLs
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/**
 * MapComponent - Displays a map centered on given coordinates.
 * @param {number} latitude - Latitude coordinate.
 * @param {number} longitude - Longitude coordinate.
 * @param {string} name - Animal name to show in the popup.
 */
const MapComponent = ({ latitude, longitude, name }) => {
  // Set a default zoom level 
  const zoom = 13;

  // Check if coordinates are valid
  if (!latitude || !longitude) return <p>No location data available.</p>;

  return (
    <MapContainer center={[latitude, longitude]} zoom={zoom} style={{ height: '300px', width: '100%' }}>
      {/* Use a free tile layer (OpenStreetMap) https://react-leaflet.js.org/ */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
