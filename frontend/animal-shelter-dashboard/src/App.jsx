import React from 'react';
import { AnimalProvider } from './context/AnimalContext'; // Global context provider
import AppRoutes from './routes';  // Router configuration for navigation

/**
 * App Component - wraps the entire application with necessary providers.
 */
function App() {
  return (
    // Wrap the app in the AnimalProvider to share animal data across components.
    <AnimalProvider>
      <AppRoutes />
    </AnimalProvider>
  );
}

export default App;