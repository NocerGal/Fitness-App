import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react';


export default function Header({ activePage }) {
    return (
        <header className="header">
            <div className="headerCtn">
                <Link to="/Planning" className="logo-link">
                    <img src="../src/assets/logo.png" alt="Logo Featly" />
                </Link>
                <ul>
                    <li>
                        <Link to="/Planning" className={activePage === '/Planning' || activePage === '/' ? 'active' : ''}>
                            Planning
                        </Link>
                    </li>
                    <li>
                        <Link to="/Activities" className={activePage === '/Activities' ? 'active' : ''}>
                            Activités
                        </Link>
                    </li>
                    <li>
                        <Link to="/Recipes" className={activePage === '/Recipes' ? 'active' : ''}>
                            Recettes
                        </Link>
                    </li>
                    <Link to="/User" className={activePage === '/User' ? 'active' : ''}>
                        <UserCircle2 className='userIcon' size={36} color="#00bf63" />
                    </Link>
                </ul>
            </div>
        </header>
    );
}