//open in new tab
import React from 'react';
import ToDoPage from './ToDoPage';

function App() {
	const path = window.location.pathname;

	return (
		<>
      {path === '/' && <ToDoPage></ToDoPage>}
		</>
	);
}

export default App;
