import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form(props) {

  const [inputValue, setInputValue] = React.useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const saveToDo = () => {
    props.onCreate(inputValue);
    setInputValue('');
    props.onClose();
  }
  
  return(
    <div className="animate__slow animate__jackInTheBox animate__animated bg-gradient-to-bl from-zinc-500 via-gray-300 to-zinc-300 shadow-slate-800 rounded-lg shadow-md">
      <div className="px-2 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Create a todo</h3><form className="mt-5">
          <div>
            <Input value={inputValue} onChange={onInputChange}></Input></div>
            <div className="flex justify-start space-x-2 pt-5">
              <Button disabled={!inputValue} onClick={saveToDo} theme="highlight">Save</Button>
              <Button onClick={props.onClose} theme="secondary">Cancel</Button></div></form></div>
    </div>
  );
}

export default Form;