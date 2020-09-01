import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Dashboard.css';
import NavBar from '../../NavBars/DashboardNav/NavBar';
import ProjectCard from '../../Card/Card';
import SettingsModal from '../../Modals/SettingsModal';
import { ReactComponent as DescriptionIcon } from '../../icons/description-icon.svg';

const Dashboard = props => {
  const [projects, setProjects] = useState([]);
  const [settingsModal, setSettingsModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:3000/projects', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(projects => setProjects(projects));
  }, []);

  const projectSettingsClick = project => {
    console.log(project);
  };

  const logout = () => {
    localStorage.removeItem('token');
    props.history.push('/login');
  };

  return (
    <div className='dashboard'>
      <div className='dashboard-layers'>
        <NavBar activateModal={() => setSettingsModal(!settingsModal)} />
        <div className='dash-main'>
          <div className='dash-main-header-nav'></div>
          <div className='dash-main-content'>
            <div className='dash-main-projects-container container'>
              <div className='row'>
                {projects.map(project => (
                  <div className='col-xl-3 col-lg-6' key={project.id}>
                    <ProjectCard
                      project={project}
                      settingsClick={projectSettingsClick}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CSSTransition
        in={settingsModal}
        classNames='settings-modal'
        timeout={300}
        unmountOnExit
      >
        <SettingsModal logout={logout} />
      </CSSTransition>

      <div className='modal-window-overlay'>
        <div className='m5-modal'>
          <div className='modal-project-banner'></div>
          <div className='modal-project-header'>
            <h3 contentEditable='true'>Mod 5 Project</h3>
          </div>
          <div className='modal-project-info-body'>
            <div className='modal-project-description'>
              <DescriptionIcon />
              <h4>Description</h4>
            </div>
            <div className='modal-project-status'>
              <h4>Project Status</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
