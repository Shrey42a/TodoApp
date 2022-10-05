import React from "react";
import Header from "./Header";
import ToDoRow from "./ToDoRow";
import Button from "./Button";
import Form from "./Form";
import Footer from "./Footer";

let i = 0;

function ToDoPage() {
  const savedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const [todoList, setTodoList] = React.useState(savedTodoList);
  const [visibleForm, updateVisibleForm] = React.useState(false);
  
  const completeTodoList = todoList.filter(t => t.done);
  const incompleteTodoList = todoList.filter(t => !t.done);

  const showForm = () => updateVisibleForm(true);
  const hideForm = () => updateVisibleForm(false);
  
  const addTodo = (todoTitle) => {
     const newTodoList = [...todoList, {id: i++, title: todoTitle, done: false}];
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }

   const onTodoDelete = (todo) => {
    const newTodoList = todoList.filter(t => t.id !== todo.id);
     setTodoList(newTodoList);
     localStorage.setItem('todoList', JSON.stringify(newTodoList));
   }
  
  const markAsDone = (todo) => {
    todo.done = true;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }

  const markAsNotDone = (todo) => {
    todo.done = false;
    const newTodoList = [...todoList];
    setTodoList([...newTodoList]);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }
  return (
    <>
    <div className="bg-gradient-to-tr from-zinc-300 via-slate-100 to-teal-200 dark-mode">
      <Header></Header>
      <div className="px-4 mx-auto max-w-7xl py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
        <h1 className="h1 text-5xl font-bold leading-tight text-gray-900">Things to get done</h1>
          <div>
          <button className="text-center px-4 py-2 text-sm font-medium text-white bg-yellow-500 border border-transparent rounded-md shadow-sm shadow-zinc-600 hover:bg-yellow-600 focus:outline-none mt-2 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Refresh</button></div>
        </div>
          <h3 className="h2 text-lg font-medium pt-8 leading-6 p-3 text-gray-900">Things to do</h3>
          
        {!todoList.length && <div className="h2 text-base text-gray-500">No Todos Here !</div>}

        {incompleteTodoList.map(t => <ToDoRow todo={t} onStatusChange={markAsDone} done={false} key={t.id} onDelete={onTodoDelete}></ToDoRow>)}
        
        {!visibleForm && <Button onClick={showForm} theme="primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="-ml-0.5 mt-0.5 mr-2 h-4 w-4"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path></svg>Add a todo</Button>}
        {visibleForm && <Form onClose={hideForm} onCreate={addTodo}></Form>}
        <h3 className="h2 text-lg font-medium pt-8 leading-6 p-3 text-gray-900">Things done</h3>
        {!completeTodoList.length && <div className="h2 text-base text-gray-500">No Todos Here !</div>}

        {completeTodoList.map(t => <ToDoRow todo={t} onStatusChange={markAsNotDone} done={true} key={t.id} onDelete={onTodoDelete}></ToDoRow>)}

        <div className="flex mt-8 h-52 w-60 justify-end">
           <img className="h-full w-full" src="https://media.discordapp.net/attachments/933654325127938101/1025987346262392902/Logo_todo.png?width=789&height=492"></img>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ToDoPage;
