import React, { useState } from 'react';

import './ModalNP.css';
import { ReactComponent as XIcon } from '../icons/x-icon.svg';

const ModalNP = props => {
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDesc, setNewProjectDesc] = useState('');

  const handleCreateProjectClick = () => {
    const projectData = { name: newProjectName, description: newProjectDesc };
    props.createNewProject(projectData);
    props.modalClose();
  };

  return (
    <div className='modal-window-overlay'>
      <div className='modal-np'>
        <div className='modal-close-wrapper-np' onClick={props.modalClose}>
          <XIcon />
        </div>
        <div className='modal-np-header'>
          <h3>New Project</h3>
        </div>
        <div className='modal-np-project-name modal-np-section'>
          <h4>Name</h4>
          <input
            type='text'
            placeholder='e.g. Project X'
            defaultValue={newProjectName}
            onChange={e => setNewProjectName(e.target.value)}
          />
        </div>
        <div className='modal-np-project-description modal-np-section'>
          <h4>Description</h4>
          <textarea
            placeholder='(Optional) Description'
            defaultValue={newProjectDesc}
            onChange={e => setNewProjectDesc(e.target.value)}
          />
        </div>
        <button
          disabled={newProjectName !== '' ? false : true}
          onClick={handleCreateProjectClick}
        >
          Create Project
        </button>
      </div>
    </div>
  );
};

export default ModalNP;
