import React, { useState, useEffect } from 'react';

import './Card.css';
import { ReactComponent as CalendarIcon } from '../icons/calendar-icon.svg';
import { ReactComponent as ProjectSettingsIcon } from '../icons/ps-settings-icon.svg';

const Card = props => {
  const [statusStyling, setStatusStyling] = useState('status-box');
  const project = props.project;

  useEffect(() => {
    switch (project.status) {
      case 'Planned':
        setStatusStyling('status-box--planned');
        break;
      case 'Active':
        setStatusStyling('status-box--active');
        break;
      case 'Completed':
        setStatusStyling('status-box--completed');
        break;
      case 'On hold':
        setStatusStyling('status-box--onhold-cancelled');
        break;
      case 'Cancelled':
        setStatusStyling('status-box--onhold-cancelled');
        break;
      default:
        return;
    }
  }, [project.status]);

  return (
    <div className='project-card'>
      <div
        className='project-card-banner'
        style={{
          backgroundImage: `url(${project.banner})`
        }}
      >
        <span className='banner-gradient'></span>
      </div>
      <div className='project-card-header'>
        <h3>{project.name}</h3>
      </div>
      <div className='project-card-info-section'>
        <div className='status-duedate-items-wrapper'>
          <div className={statusStyling}>
            <p className='status-text'>{project.status}</p>
          </div>
          <div className='duedate-box'>
            <CalendarIcon />
            <p>Sep 7</p>
          </div>
        </div>
        <div className='ps-settings-icon-wrapper'>
          <ProjectSettingsIcon onClick={() => props.settingsClick(project)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
