import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { actions, reducer } from './store';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    editTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.name = action.payload.name;
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              dispatch(actions.updateTodo({
                id: todo.id,
                completed: !todo.completed,
              }));
            }}
          />
          {todo.name}
          <button onClick={() => {
            dispatch(actions.deleteTodo(todo.id));
          }}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const AddTaskForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(actions.addTodo({
      name,
    }));

    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task..."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

const App = () => {
  return (
    <div>
      <h1>Task List App</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default App;
