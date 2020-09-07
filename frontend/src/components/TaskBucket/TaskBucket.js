import React from 'react';

import './TaskBucket.css';
import Task from '../Task/Task';

const TaskBucket = props => {
  const taskBucket = props.taskBucket;

  return (
    <div className='task-bucket-wrapper'>
      <div className='task-bucket'>
        <div className='task-bucket-header-wrapper'>
          <h3>{taskBucket.name}</h3>
        </div>
        <div className='task-bucket-tasks-container'></div>
      </div>
    </div>
  );
};

export default TaskBucket;
