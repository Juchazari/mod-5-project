import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './Project.css';
import NavBar from '../../NavBars/ProjectNav/NavBar';
import TaskBucket from '../../TaskBucket/TaskBucket';
import ModalTI from '../../Modals/ModalTI';
import ModalTBD from '../../Modals/ModalTBD';

const Project = () => {
  let { id } = useParams();
  const token = localStorage.getItem('token');
  const [project, setProject] = useState({});
  const [favorite, setFavorite] = useState(false);
  const [projectMembers, setProjectMembers] = useState([]);
  const [taskBuckets, setTaskBuckets] = useState([]);
  const [modalTI, setModalTI] = useState(false);
  const [clickedTask, setClickedTask] = useState({});
  const [modalTBD, setModalTBD] = useState(false);
  const [clickedBucketDelete, setClickedBucketDelete] = useState({});

  // Fetch initial project data
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(project => {
        setProject(project);
        setFavorite(project.favorite);
        setProjectMembers(project.project_members);
        setTaskBuckets(project.task_buckets);
      });
  }, []);

  // Creates new task for a bucket
  const createNewTask = (task, bucket) => {
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        bucket_id: bucket.id,
        task_name: task
      })
    })
      .then(res => res.json())
      .then(taskBucket => {
        const updatedBuckets = taskBuckets.map(bucket => {
          let bucketCopy = { ...bucket };
          if (bucketCopy.id === taskBucket.id) {
            bucketCopy = taskBucket;
          }
          return bucketCopy;
        });
        setTaskBuckets(updatedBuckets);
      });
  };

  // Activates a modal for a specific task
  const activateTaskModal = task => {
    setModalTI(true);
    setClickedTask(task);
  };

  // Updates the name for a task
  const updateTaskInfo = (taskId, info, taskExtra = {}) => {
    let taskPIBucketChange;
    const { bucketChange, task, bucket } = taskExtra;
    if (bucketChange) {
      taskPIBucketChange = true;
    }

    fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(taskBucket => {
        if (taskPIBucketChange) {
          removeTaskFromBucket(task, bucket, taskBucket);
        } else {
          const updatedBuckets = taskBuckets.map(bucket => {
            let bucketCopy = { ...bucket };
            if (bucketCopy.id === taskBucket.id) {
              bucketCopy = taskBucket;
            }
            return bucketCopy;
          });
          setTaskBuckets(updatedBuckets);
        }
      });
  };

  const removeTaskFromBucket = (task, bucket, newPIBucket) => {
    const updatedTasks = bucket.tasks.filter(taskObj => taskObj.id !== task.id);
    const upTasksForBuckets = taskBuckets.map(taskBucket => {
      const bucketCopy = { ...taskBucket };
      if (bucketCopy.id === bucket.id) {
        bucketCopy.tasks = updatedTasks;
      }
      return bucketCopy;
    });

    const updatedBuckets = upTasksForBuckets.map(bucketObj => {
      if (bucketObj.id === newPIBucket.id) {
        bucketObj = newPIBucket;
      }
      return bucketObj;
    });

    setTaskBuckets(updatedBuckets);
  };

  const bucketDeleteConf = bucket => {
    setModalTBD(true);
    setClickedBucketDelete(bucket);
  };

  const deleteTaskBucket = bucket => {
    fetch(`http://localhost:3000/task_buckets/${bucket.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(project => {
        const updatedBuckets = project.task_buckets;
        setTaskBuckets(updatedBuckets);
      });
  };

  const updateBucketName = (bucket, name) => {
    fetch(`http://localhost:3000/task_buckets/${bucket.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ name })
    });
  };

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
            {taskBuckets.map(taskBucket => (
              <TaskBucket
                key={taskBucket.id}
                taskBucket={taskBucket}
                createNewTask={createNewTask}
                activateTaskModal={activateTaskModal}
                bucketDeleteConf={bucketDeleteConf}
                updateBucketName={updateBucketName}
              />
            ))}
          </div>
        </div>
      </div>

      <CSSTransition
        in={modalTI}
        classNames='modal-ti'
        timeout={300}
        unmountOnExit
      >
        <ModalTI
          modalClose={() => setModalTI(false)}
          updateTaskInfo={updateTaskInfo}
          removeTaskFromBucket={removeTaskFromBucket}
          task={clickedTask}
          buckets={taskBuckets}
        />
      </CSSTransition>

      <CSSTransition
        in={modalTBD}
        classNames='modal-tbd'
        timeout={300}
        unmountOnExit
      >
        <ModalTBD
          modalClose={() => setModalTBD(false)}
          taskBucket={clickedBucketDelete}
          deleteTaskBucket={deleteTaskBucket}
        />
      </CSSTransition>
    </>
  );
};

export default Project;
