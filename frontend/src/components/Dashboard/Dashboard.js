import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Dashboard.css';
import SettingsModal from '../Modals/SettingsModal';
import { ReactComponent as SettingIcon } from '../icons/setting-icon.svg';
import { ReactComponent as BellIcon } from '../icons/bell-icon.svg';
import { ReactComponent as CalendarIcon } from '../icons/calendar-icon.svg';

const Dashboard = (props) => {
  const [settingsModal, setSettingsModal] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    props.history.push('/login');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-layers">
        <div className="nav-surface">
          <div className="nav-surface-control">
            <div className="nav-surface-control-component">
              <div className="nav-surface-control-primary">
                <div className="nav-top-icons"></div>
                <div className="nav-bottom-icons">
                  <div className="bell-icon-wrapper">
                    <BellIcon />
                  </div>
                  <div className="setting-icon-wrapper">
                    <SettingIcon
                      onClick={() => setSettingsModal(!settingsModal)}
                    />
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
              <div className="row">
                <div className="col-md-3">
                  <div className="portfolio-card">
                    <div
                      className="portfolio-card-banner"
                      style={{
                        backgroundImage:
                          'url(' +
                          'https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80' +
                          ')'
                      }}
                    >
                      <span className="banner-gradient"></span>
                    </div>
                    <div className="portfolio-card-header">
                      <h3>Mod 5 Project</h3>
                    </div>
                    <div className="portfolio-card-info-section">
                      <div className="status-box">
                        <p>Active</p>
                      </div>
                      <div className="duedate-box">
                        <CalendarIcon />
                        <p>Sep 7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CSSTransition
        in={settingsModal}
        classNames="settings-modal"
        timeout={300}
        unmountOnExit
      >
        <SettingsModal logout={logout} />
      </CSSTransition>
    </div>
  );
};

export default Dashboard;
