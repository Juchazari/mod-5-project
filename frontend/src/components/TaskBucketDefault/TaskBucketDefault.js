import React from 'react';
import { MdAdd } from 'react-icons/md';

import './TaskBucketDefault.css';
import Task from '../Task/Task';

const TaskBucketDefault = () => {
  return (
    <div className='task-bucket-wrapper'>
      <div className='task-bucket'>
        <div className='task-bucket-header-wrapper'>
          <h3>Parking Lot</h3>
        </div>
        <div className='task-bucket-tasks-container'>
          <Task />
          <Task />
        </div>
        <div className='task-bucket-new-task-wrapper'>
          <MdAdd /> <p>Add task</p>
        </div>
      </div>
    </div>
  );
};

export default TaskBucketDefault;
