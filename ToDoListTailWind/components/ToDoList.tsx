import { useTasks } from "../hooks/useTasks";
import React from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";

interface TodoListProps {
  onTaskAdded?: (task: Task) => void;
}

const TodoList: React.FC<TodoListProps> = ({ onTaskAdded }) => {
  const [tasks, addTask] = useTasks();

  const handleTaskAdded = (task: Task) => {
    addTask(task);
    if (onTaskAdded) {
      onTaskAdded(task);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <AddTaskForm onSubmit={handleTaskAdded} />
      <ul className="mt-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
