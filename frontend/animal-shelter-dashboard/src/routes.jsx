import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

/**
 * AppRoutes - Configures the application's routes using react-router-dom.
 */
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the main dashboard */}
        <Route path="/" element={<Dashboard />} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;