import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to='/'><h2>Home</h2></Link>
            <Link to='/recipes'><h2>Recipes</h2></Link>
            <Link to='/recipes/new'><h2>Create New Recipe</h2></Link>
        </nav>
    );
};

export default Nav;