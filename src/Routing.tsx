import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArenaPage from './views/pages/ArenaPage';
import Choose from './views/pages/Choose';
import FirstPage from './views/pages/FirstPage';

function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Choose />} />
                <Route path="/surf" element={<FirstPage />} />
                <Route path="/arena" element={<ArenaPage />} />
            </Routes>
        </div>
    )
}

export default Routing