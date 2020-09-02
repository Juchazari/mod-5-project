import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Dashboard.css';
import NavBar from '../../NavBars/DashboardNav/NavBar';
import ProjectCard from '../../Card/Card';
import SettingsModal from '../../Modals/SettingsModal';
import ModalPS from '../../Modals/ModalPS';

const Dashboard = props => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});

  const [settingsModal, setSettingsModal] = useState(false);
  const [modalPS, setModalPS] = useState(false);

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
    setProject(project);
    setModalPS(true);
  };

  const updateProjName = (project, newName) => {
    const updatedProjects = [...projects].map(projObj => {
      const projectCopy = { ...projObj };

      if (projectCopy.id === project.id) {
        projectCopy.name = newName;
      }

      return projectCopy;
    });

    setProjects(updatedProjects);

    const jwtoken = localStorage.getItem('token');
    fetch(`http://localhost:3000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${jwtoken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ name: newName })
    });
  };

  const updateProjDes = (project, newDescription) => {
    const jwtoken = localStorage.getItem('token');
    fetch(`http://localhost:3000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${jwtoken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ description: newDescription })
    });
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
      <CSSTransition
        in={modalPS}
        classNames='modal-ps'
        timeout={300}
        unmountOnExit
      >
        <ModalPS
          modalClose={() => setModalPS(false)}
          project={project}
          updateProjDes={updateProjDes}
          updateProjName={updateProjName}
        />
      </CSSTransition>
    </div>
  );
};

export default Dashboard;
