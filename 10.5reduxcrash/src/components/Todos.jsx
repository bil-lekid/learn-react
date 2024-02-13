import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-lg font-serif w-full mx-auto text-center py-3 underline">
        Todos:
      </h1>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="bg-gray-800 rounded outline-none my-3 py-3 flex justify-between mx-auto max-w-lg"
        >
          <h1 className="text-lg text-white">{todo.text}</h1>
          <button
            className="bg-red-400 rounded outline-none"
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
          >
            🗑️
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todos;
