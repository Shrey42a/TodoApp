import React from "react";
import Checkbox from "./Checkbox";
import { GiSplitCross } from "react-icons/gi";
import 'animate.css';

function ToDoRow(props) {

  const onCheckboxChange = () => {
    props.onStatusChange(props.todo);
  }

  const onDelete = () => {
    props.onDelete(props.todo, props.done);
  }
  
  return(
    <div className="animate__slow animate__jackInTheBox animate__animated shadow-md shadow-neutral-800 space-x-2 m-2 flex justify-between p-3 px-4 max-w-5xl rounded-md bg-gradient-to-r from-teal-200 via-cyan-200 to-zinc-100">
      <div className="flex justify-around">
      <Checkbox checked={props.done} onChange={onCheckboxChange}  />
        <span className={"pl-2 ml-2 -mt-0.5 font-medium text-gray-700 " + (props.done && 'line-through')}>{props.todo.title}</span></div>
      <div className="mt-1 cursor-pointer -ml-4">
      <GiSplitCross onClick={onDelete} /></div>
    </div>
    
  );
}
export default ToDoRow;