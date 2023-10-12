import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  return (
    <div className="home">
      <>
      <h1>Je suis la landing page non-connectée</h1>
      </>
    </div>
  );
}