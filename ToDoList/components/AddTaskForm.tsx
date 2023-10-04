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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleTaskInputChange}
      />
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddTaskForm;
