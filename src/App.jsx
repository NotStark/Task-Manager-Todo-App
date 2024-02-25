import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { AddTask, Tasks } from "./components";

function App() {
 

  return (
    <>
      <div className="flex items-center gap-3 border-b-2 pb-3">
        <IoMdCheckboxOutline className="text-5xl text-gray-300" />
        <h4 className="text-2xl font-semibold">Task Manager</h4>
      </div>
      <AddTask />
      <Tasks />
    </>
  );
}

export default App;
