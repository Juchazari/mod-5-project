import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import './Project.css';
import NavBar from '../../NavBars/ProjectNav/NavBar';
import TaskBucketDefault from '../../TaskBucketDefault/TaskBucketDefault';
import TaskBucket from '../../TaskBucket/TaskBucket';

const Project = () => {
  const token = localStorage.getItem('token');
  let { id } = useParams();

  const [project, setProject] = useState({});
  const [favorite, setFavorite] = useState(false);
  const [projectMembers, setProjectMembers] = useState([]);
  const [taskBuckets, setTaskBuckets] = useState([]);

  const [addTbActive, setAddTbActive] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(project => {
        console.log(project);
        setProject(project);
        setFavorite(project.favorite);
        setProjectMembers(project.project_members);
        setTaskBuckets(project.task_buckets);
      });
  }, []);

  return (
    <>
      <div className='project-show-page'>
        <NavBar
          project={project}
          favorite={favorite}
          projectMembers={projectMembers}
        />
        <div className='project-contents-section'>
          <div
            className='pcs-project-banner'
            style={{
              backgroundImage: `url(${project.banner})`
            }}
          ></div>
          <div className='project-task-buckets-container'>
            <TaskBucketDefault />
            {taskBuckets.map(taskBucket => (
              <TaskBucket key={taskBucket.id} taskBucket={taskBucket} />
            ))}
            <div className='task-bucket-wrapper'>
              <div className='task-bucket'>
                <div className='new-task-bucket-btn'>
                  <div className='new-task-bucket-name-wrapper'>
                    <MdAdd />
                    <h3>Add task bucket</h3>
                  </div>
                  <div className='new-task-bucket-input-wrapper'>
                    <input
                      type='text'
                      defaultValue=''
                      placeholder='Task bucket name'
                    />
                    <button>Add Bucket</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
