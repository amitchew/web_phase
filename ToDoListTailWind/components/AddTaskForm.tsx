import React from "react";

interface AddTaskFormProps {
  onSubmit: (task: Task) => void;
  task?: string;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onSubmit, task }) => {
  const [taskText, setTaskText] = React.useState("");

  const handleTaskInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      id: Date.now(),
      text: taskText,
      completed: false,
    });

    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row items-center">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleTaskInputChange}
        className="w-full border-gray-300 rounded-md px-3 py-2"
      />
      <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
        Add task
      </button>
    </form>
  );
};

export default AddTaskForm;
