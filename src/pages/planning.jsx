import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../layout/header';


export default function Planning() {
    const location = useLocation();
    const [activePage, setActivePage] = useState(location.pathname);

    return (
        <>
            <Header activePage={activePage} />
            <h1>je suis la page qui affiche le planning et compte-rendu de l'utilisateur</h1>
        </>
    );
}