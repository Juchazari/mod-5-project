import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Dashboard.css';
import SettingsModal from '../Modals/SettingsModal';
import { ReactComponent as SettingIcon } from '../icons/setting-icon.svg';
import { ReactComponent as BellIcon } from '../icons/bell-icon.svg';

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
              <h1>Hello World</h1>
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
