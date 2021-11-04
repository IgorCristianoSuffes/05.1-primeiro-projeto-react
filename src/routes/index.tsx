import React from 'react';
import { BrowserRouter, Route, Router } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Route path="/" component={Dashboard} />
    </BrowserRouter>
);

export default Routes;