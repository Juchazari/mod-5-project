import React from 'react';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-layers">
        <div className="nav-surface">
          <div className="nav-surface-control">
            <div className="nav-surface-control-component">
              <div className="nav-surface-control-primary"></div>
            </div>
          </div>
        </div>
        <div className="dash-main">
          <div className="dash-main-header-nav"></div>
          <div className="dash-main-content">
            <div className="dash-main-project-container">
              <h1>Hello World</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
