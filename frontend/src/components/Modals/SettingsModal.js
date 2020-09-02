import React from 'react';

import './ModalSettings.css';
import { ReactComponent as UserIcon } from '../icons/user-icon.svg';
import { ReactComponent as LogoutIcon } from '../icons/logout-icon.svg';

const SettingsModal = props => {
  return (
    <div className='settings-modal'>
      <div className='profile-section settings-modal-section'>
        <UserIcon /> <p>My Profile</p>
      </div>
      <div
        className='logout-section settings-modal-section'
        onClick={props.logout}
      >
        <LogoutIcon /> <p>Logout</p>
      </div>
    </div>
  );
};

export default SettingsModal;
