import React from "react";

function Button(props) {
  let themeClasses = 'text-white bg-yellow-500 border-transparent hover:bg-yellow-600';
  let radiusClass = 'rounded-full shadow-sm';

  if(props.theme === 'secondary') {
    themeClasses = 'text-gray-900 bg-white rounded-md border-gray-200 hover:bg-gray-200';
  }

  if(props.theme === 'highlight') {
    radiusClass = 'rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed';
  }
  
  return(
     <button data-mdb-ripple="true"
    data-mdb-ripple-color="light" disabled={props.disabled} onClick={props.onClick} className={"inline-flex justify-center px-4 py-2 text-sm font-medium mt-4 text-white bg-yellow-500 border border-transparent rounded-full shadow-zinc-600 shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 " + themeClasses + '  ' + radiusClass}>
       {props.children}
     </button>
  );
}

export default Button;
