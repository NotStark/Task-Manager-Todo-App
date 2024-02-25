import React, { useEffect } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { AddTask, Tasks } from "./components";
import { replaceTasks } from "./redux/taskSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(replaceTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    console.log('hi');
  }, []);

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
