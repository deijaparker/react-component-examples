import React from "react";

// Functional Component with Props
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

import React, { useState } from "react";

// Component with State
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

import React, { useState } from "react";

// List Rendering Component
const TodoList = () => {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build Projects",
    "Upload to GitHub",
  ]);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};
