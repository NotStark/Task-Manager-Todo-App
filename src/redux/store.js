
import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

// Configure the Redux store with the taskSlice reducer
const store = configureStore({
  reducer: { taskSlice },
});

// Subscribe to changes in the store (runs on the every change in the state)
store.subscribe(() => {
  const tasks = store.getState().taskSlice.tasks;
  // console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks)); 
  
});

// Export the configured store
export default store;
