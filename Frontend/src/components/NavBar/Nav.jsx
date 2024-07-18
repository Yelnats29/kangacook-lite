import React from 'react';
import { Link } from 'react-router-dom';

// Renders a navigation bar.
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Home</Link>
                <div className="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/recipes'>Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/recipes/new'>Create New Recipe</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;