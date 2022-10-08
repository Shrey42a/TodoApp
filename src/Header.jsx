import React from "react";

function Header()  {
  return (
    <nav className="nav shadow-zinc-900 shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/"><p className="text-2xl font-medium leading-6 text-gray-900 sm:truncate">X TODO</p></a>
          <img className="h-16 w-20" src="https://media.discordapp.net/attachments/933654325127938101/1025987346262392902/Logo_todo.png?width=789&height=492"></img>
        </div>
      </div>
    </nav>
  );
}

export default Header;
