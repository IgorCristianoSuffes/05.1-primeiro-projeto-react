import React from 'react';
import {Route, Routes } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routess: React.FC = () => (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repositories/:profile/:repository" element={<Repository />} />
    </Routes>
);

export default Routess;