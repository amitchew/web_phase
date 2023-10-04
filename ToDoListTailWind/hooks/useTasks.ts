import { useState } from "react";

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export function useTasks(): [Task[], (task: Task) => void] {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return [tasks, addTask];
}
