import { createSlice, nanoid } from "@reduxjs/toolkit";

// Create a slice for managing tasks
const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: JSON.parse(localStorage.getItem("tasks")) || [] },
  reducers: {
    // Add a task to the state
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        task: action.payload,
        status: false,
      };

      state.tasks.push(task);
    },
    // Remove a task from the state
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // Change the status of a task
    changeStatus: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.status = !task.status;
          return task;
        }
        return task;
      });
    },
  },
});

// Export the action creators
export const { addTask, removeTask, changeStatus} = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;
