import React from 'react';

import './NavBar.css';
import { ReactComponent as SettingIcon } from '../../icons/setting-icon.svg';
import { ReactComponent as BellIcon } from '../../icons/bell-icon.svg';

const NavBar = props => {
  return (
    <div className='nav-surface'>
      <div className='nav-surface-control'>
        <div className='nav-surface-control-component'>
          <div className='nav-surface-control-primary'>
            <div className='nav-top-icons'></div>
            <div className='nav-bottom-icons'>
              <div className='bell-icon-wrapper'>
                <BellIcon />
              </div>
              <div className='setting-icon-wrapper'>
                <SettingIcon onClick={props.activateModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
