import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PageTransition from './src/Pages/PageTransition';

function AppRoutes() {

    return (
        <Router>
            <PageTransition />
        </Router>
    );
}

export default AppRoutes;
