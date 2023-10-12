import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import HomePage from './pages/home';  
import Planning from './pages/planning';
import Activities from './pages/activities';
import Recipes from './pages/recipes';

function App() {
  const location = useLocation();
  const routeName = location.pathname.replace(/\//g, "") || "FEATLY";

  return (
    <div className="App">
      <Helmet>
        <title>{routeName}</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" />} />
        <Route path="Accueil" element={<HomePage />} />
        <Route path="Planning" element={<Planning />} />
        <Route path="Activities" element={<Activities/>} />
        <Route path="Recipes" element={<Recipes/>} />
      </Routes>
    </div>
  );
}

export default App;
