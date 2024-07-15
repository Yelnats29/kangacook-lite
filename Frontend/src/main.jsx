import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
    </Router>
  </React.StrictMode>,
);
