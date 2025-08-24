// components/Todo.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Feature/Todo/todoSlicer";

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();


  //AGAR KOI BE TASK NAHI TO YA SHOW HO GA
  if (!todos || todos.length === 0) {
    return (
      <div className="rounded-xl border border-white/20 bg-white/5 p-6 text-center">
        <p className="text-white/90">No tasks yet. Add your first one! 🚀</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="group flex items-center justify-between rounded-xl border border-white/20
                     bg-zinc-900/60 hover:bg-zinc-900/80 text-white px-4 py-3 transition shadow-sm"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/90"></span>
            <span className="font-medium tracking-tight">{todo.text}</span>
          </div>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="inline-flex items-center gap-2 rounded-lg bg-red-500/80 hover:bg-red-600
                       px-3 py-1.5 text-sm font-semibold text-white transition shadow group-focus:visible
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300 focus:ring-offset-zinc-900"
            aria-label="Delete todo"
            title="Delete"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
            </svg>
          
          </button>
        </li>
      ))}
    </ul>
  );
}
