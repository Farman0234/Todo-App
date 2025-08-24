// App.jsx
import React from "react";
import AddTodo from "./Componnet/AddTodo";
import Todos from "./Componnet/Todo";
 function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4 sm:p-6">
      <div className="mx-auto w-full max-w-2xl">
        <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-5 sm:p-7">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Todo List
            </h1>
            <span className="text-white/80 text-sm sm:text-base">
              Stay organized ✨
            </span>
          </header>

          <AddTodo />
          <div className="mt-4">
            <Todos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;