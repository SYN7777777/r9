import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Catch all unknown routes */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
