import React from 'react';

import './ModalDS.css';
import { ReactComponent as UserIcon } from '../icons/user-icon.svg';
import { ReactComponent as LogoutIcon } from '../icons/logout-icon.svg';

const ModalDS = props => {
  return (
    <div className='modal-ds'>
      <div className='profile-section modal-ds-section'>
        <UserIcon /> <p>My Profile</p>
      </div>
      <div className='logout-section modal-ds-section' onClick={props.logout}>
        <LogoutIcon /> <p>Logout</p>
      </div>
    </div>
  );
};

export default ModalDS;
