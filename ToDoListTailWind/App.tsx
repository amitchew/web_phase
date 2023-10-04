import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;
