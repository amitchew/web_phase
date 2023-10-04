import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => {
              dispatch({
                type: 'UPDATE_TASK',
                payload: {
                  id: task.id,
                  completed: !task.completed,
                },
              });
            }}
          />
          {task.name}
          <button onClick={() => {
            dispatch({
              type: 'DELETE_TASK',
              payload: task.id,
            });
          }}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
