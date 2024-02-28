import React, { useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import toast from "react-hot-toast";

function AddTask() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value.trim();
    if (inputValue === "") {
      toast.error("Provide a task");
      return;
    }
    dispatch(addTask(inputValue));
    inputRef.current.value = ""; 
  };

  return (
    <form
      className="w-full flex gap-3  items-center border mt-5 rounded-md h-[5rem] px-4 border-slate-300"
      onSubmit={handleSubmit}
    >
      <button type="submit">
        <FiPlus className="text-3xl" />
      </button>
      <input
        type="text"
        ref={inputRef}
        placeholder="Add Your Task"
        className="focus:outline-none w-full h-3/5 rounded-md px-4 border border-slate-300 bg-transparent font-semibold"
      />
    </form>
  );
}

export default AddTask;
