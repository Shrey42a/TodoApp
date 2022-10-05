import React from "react";

function Checkbox(props) {
  return(
        <input data-bs-toggle="popover" data-bs-title="Popover title"
    data-bs-content="And here's some amazing content. It's very engaging. Right?" checked={props.checked} onChange={props.onChange} type="checkbox" className="w-4 mt-1 checked:bg-yellow-600 h-4 cursor-pointer checked:border-yellow-600 border-gray-300 rounded shadow-sm shadow-zinc-700 focus:ring-white" />  
  );
}

export default Checkbox;
