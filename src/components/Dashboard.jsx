// src/pages/Home.js
import React from 'react';
import MetroTiles from './MetroTiles';
import TitleWithLine from './common/TitleWithLine';

const Dashboard = () => {
    return (
        <div>
            <TitleWithLine title="Dashboard"></TitleWithLine>
            <MetroTiles />
        </div>
    );
};

export default Dashboard;
