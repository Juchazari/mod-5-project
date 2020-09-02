import React, { useState } from 'react';

import './ModalPS.css';
import { ReactComponent as XIcon } from '../icons/x-icon.svg';
import { ReactComponent as DescriptionIcon } from '../icons/description-icon.svg';

const ModalPS = props => {
  const project = props.project;

  const [projectName, setProjectName] = useState(project.name);

  const [editingDescription, setEditingDescription] = useState(false);
  const [projectDescription, setProjectDescription] = useState(
    project.description
  );

  const saveName = () => {
    props.updateProjName(project, projectName);
  };

  const saveDescription = () => {
    props.updateProjDes(project, projectDescription);
    setEditingDescription(false);
  };

  return (
    <div className='modal-window-overlay'>
      <div className='modal-ps'>
        <div className='modal-close-wrapper' onClick={props.modalClose}>
          <XIcon />
        </div>
        <div
          className='modal-section-project-banner'
          style={{
            backgroundImage: `url(${project.banner})`
          }}
        ></div>
        <div className='modal-section-project-name'>
          <textarea
            defaultValue={projectName}
            onChange={e => setProjectName(e.target.value)}
            onBlur={saveName}
          />
        </div>
        <div className='modal-content-body'>
          <div className='modal-section-project-description'>
            <div className='title-wrapper'>
              <DescriptionIcon />
              <h4>Description</h4>
            </div>
            <textarea
              defaultValue={projectDescription}
              onFocus={() => setEditingDescription(true)}
              onBlur={saveDescription}
              onChange={e => setProjectDescription(e.target.value)}
            />
            {editingDescription ? (
              <button onClick={saveDescription}>Save</button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPS;
