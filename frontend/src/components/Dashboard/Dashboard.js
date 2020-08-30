import React from 'react';

import './Dashboard.css';
import { ReactComponent as SettingIcon } from '../icons/setting-icon.svg';
import { ReactComponent as BellIcon } from '../icons/bell-icon.svg';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-layers">
        <div className="nav-surface">
          <div className="nav-surface-control">
            <div className="nav-surface-control-component">
              <div className="nav-surface-control-primary">
                <div className="nav-top-items"></div>
                <div className="nav-bottom-items">
                  <div className="bell-icon-wrapper">
                    <BellIcon />
                  </div>
                  <div className="setting-icon-wrapper">
                    <SettingIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dash-main">
          <div className="dash-main-header-nav"></div>
          <div className="dash-main-content">
            <div className="dash-main-project-container container">
              <h1>Hello World</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
