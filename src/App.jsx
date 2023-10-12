import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const routeName = location.pathname.replace(/\//g, "") || "FEATLY";

  return (
    <div className="App">
      <Helmet>
        <title>{routeName}</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
