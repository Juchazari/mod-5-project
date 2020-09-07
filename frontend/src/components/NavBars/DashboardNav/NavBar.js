import React from 'react';
import { IoLogoWindows } from 'react-icons/io';
import { MdNotifications } from 'react-icons/md';
import { MdDashboard } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = props => {
  return (
    <div className='nav-surface'>
      <div className='nav-surface-control'>
        <div className='nav-surface-control-component'>
          <div className='nav-surface-control-primary'>
            <div className='top-icons'>
              <div className='icon-wrapper'>
                <IoLogoWindows className='io-logo-icon' />
              </div>
              <div className='icon-wrapper'>
                <Link to='/dashboard'>
                  <MdDashboard className='md-dash-icon' />
                </Link>
              </div>
            </div>
            <div className='bottom-icons'>
              <div className='icon-wrapper'>
                <MdNotifications className='md-noti-icon' />
              </div>
              <div className='icon-wrapper'>
                <FiSettings
                  className='fi-sett-icon'
                  onClick={props.activateModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
