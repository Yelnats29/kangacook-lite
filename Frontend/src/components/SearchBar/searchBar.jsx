import { useState } from 'react';

// Renders a search bar that allows users to search for recipes by name.
const SearchBar = ({ onSearch, results }) => {

    return (
        <div className="mb-4">
            <input
                type="text"
                className='form-control'
                placeholder="Search..."
                value={onSearch}
                onChange={(e) => results(e.target.value)}
            />
            {results.length > 0}
        </div>
    );
};



export default SearchBar;