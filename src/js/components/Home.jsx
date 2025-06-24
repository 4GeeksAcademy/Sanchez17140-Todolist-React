import React, { useState } from "react";
	
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h1>Todos</h1>
			<ul>
				<li>
					
				<input 
				 type="text" 
				 value={inputValue} 
				 onChange={(e) => setInputValue(e.target.value)}
				 onKeyDown={(e) => {
					if (e.key === "Enter") {
						setTodos(todos.concat(inputValue));
						setInputValue("");
					}
				 }}
				 placeholder="Add a task and click enter"></input>
				</li>
					{todos.map((item, index) =>(
						<li>
							{item} <i class="fas fa-trash-alt" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
						</li>
					))}
			</ul>
			<div>{todos.length}tasks </div>

		</div>
	);
};


export default Home;