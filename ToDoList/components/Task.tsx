import React from "react";
import { Task } from "../hooks/useTasks";

interface TaskProps {
  task: Task;
  onTaskCompleted?: (task: Task) => void;
}

const Task: React.FC<TaskProps> = ({ task, onTaskCompleted }) => {
  const handleTaskCompleted = () => {
    if (onTaskCompleted) {
      onTaskCompleted(task);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleTaskCompleted}
      />
      {task.text}
    </li>
  );
};

export default Task;
