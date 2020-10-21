import React, { useEffect, useState } from 'react';
// import './App.css';

function App() {
	let data = { title: "Waiting for Data" }
	const [todo, setTodo] = useState(data);
	const [Data, setData] = useState(true);
	const [fetching, setFetching] = useState(false);

	useEffect(() => {

		async function fetchingData() {
			setFetching(true)
			const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

			let data2 = await response.json();
			setTodo(data2)
			setFetching(false)
			// console.log("Data = ", todo);
		}

		if(fetching) {
			return <div>Loading Data.....</div>
		}

		fetchingData()
	}, [Data])
	return (
		<div>
			Title: {todo.title} <br/>
			{/* Id: {todo.id} */}
		</div>
	);
}

export default App;
