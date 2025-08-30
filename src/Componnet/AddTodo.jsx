// components/AddTodo.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Feature/Todo/todoSlicer";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandle = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandle} className="group">
      <div className="flex items-stretch gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Add a new task…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-xl bg-white/90 focus:bg-white text-gray-800 placeholder:text-gray-400
                       px-4 py-3 outline-none ring-2 ring-transparent focus:ring-indigo-400 transition
                       shadow-sm"
          />
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            ⌨️
          </div>
        </div>
        <button
          type="submit"
          className="rounded-xl px-5 py-3 font-semibold bg-indigo-500 text-white
                     hover:bg-indigo-600 active:bg-indigo-700 transition shadow-md
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-indigo-600"
        >
          Add
        </button>
      </div>
      <p className="mt-2 text-xs text-white/80">
        Tip: Press <kbd className="px-1 py-0.5 bg-white/20 rounded">Enter</kbd>{" "}
        to add quickly
      </p>
    </form>
  );
}

export default AddTodo;
