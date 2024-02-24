import React, { useState, useEffect } from "react";
import { MdOutlineDelete, MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus , removeTask } from "../redux/taskSlice";

function Tasks() {
  const tasks = useSelector((state) => state.taskSlice.tasks);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <div className="border border-slate-300 rounded-md mt-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className=" flex items-center justify-between px-4 border-b border-b-slate-300 w-full h-[4rem] hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-md hover:shadow-sm hover:shadow-gray-400 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3 ">
              <span
                className="text-3xl cursor-pointer"
                onClick={() => dispatch(changeStatus(task.id))}
              >
                {task.status ? (
                  <IoMdCheckboxOutline />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </span>
              <span className="text-2xl">{task.task}</span>
            </div>
            <MdOutlineDelete className="text-3xl cursor-pointer" onClick={() => dispatch(removeTask(task.id))} />
          </div>
        ))}
      </div>
    )
  );
}

export default Tasks;
