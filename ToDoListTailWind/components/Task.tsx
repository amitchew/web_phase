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
    <li className="flex flex-row items-center justify-between">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleTaskCompleted}
        className="mr-2"
      />
      <span className="text-gray-700">{task.text}</span>
    </li>
  );
};

export default Task;
