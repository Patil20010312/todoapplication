import React from 'react'


// export const initialState = [];
const taskReducer = (state, action) => {
    
    switch (action.type) {
        case "addTask":
        console.log("before",state)
          const newTask = {
            id: Date.now(),
            tName: action.payload.taskName,
            tDiscri: action.payload.taskDiscription,
          };
          return [...state, newTask]
    
        case "deleteTask":
          state.pop();
          return state;
        case "editTask":
          return;
        case "toggleComplete":
          return;
        default:
          return state;
      }
    };
    
    export default taskReducer;  
    


