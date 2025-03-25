
import React, { useReducer, useState } from "react";
 import taskReducer from "../reducers/taskReducer";
 
 const AddTask = ({ initialState }) => {
   const [taskName, setTaskName] = useState();
   const [taskDiscription, setTaskDiscription] = useState();
 
   const [state, dispatch] = useReducer(taskReducer, initialState);
   console.log(state);
   return (
     <>
       <div className="container shadow mt-5">
         Add Task
         {/* <form> */}
         <div className="mb-3">
           <label htmlFor="taskName" className="form-label">
             Task Name
           </label>
           <input
             type="text"
             className="form-control"
             id="taskName"
             onChange={(e) => setTaskName(e.target.value)}
           />
         </div>
         <div className="mb-3">
           <label htmlFor="taskDiscri" className="form-label">
             Task Discription
           </label>
           <input
             type="text"
             className="form-control"
             id="taskDiscri"
             onChange={(e) => setTaskDiscription(e.target.value)}
           />
         </div>
         <button
           className="btn btn-primary"
           onClick={() =>
             dispatch({
               type: "addTask",
               payload: { taskName: taskName, taskDiscription: taskDiscription },
             })
           }
         >
           Add Task
         </button>
         {/* </form> */}
       </div>
 
       <div>
         <table class="table">
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Name</th>
               <th scope="col">Discription</th>
               <th scope="col">Action</th>
             </tr>
           </thead>
           <tbody>
             {state.map((t, index) => (
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>{t.tName}</td>
                 <td>{t.tDiscri}</td>
                 <td>
                   <button className="btn btn-success" >Complete</button>
                   <button className="btn btn-warning" onClick={()=>dispatch({type:'edit',payload:t.id})}>Edit</button>
                   <button className="btn btn-danger" onClick={()=>dispatch({type:'delete',payload:t.id})}>Delete</button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </>
   );
 };
 
 export default AddTask;