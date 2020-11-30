import "./App.css";
import Quiz from "./components/Quiz";
import Start from "./components/Start";

import { questions } from "./data.json";
import React, { useState } from "react";

function App() {
	const [name, setName] = useState("");

	return (
		<div className="app">
			<div className="app-body">
				{name !== "" && (
					<div>
						{name}
						<Quiz questions={questions}></Quiz>
					</div>
				)}
				{name === "" && <Start setNameInParent={setName}></Start>}
			</div>
		</div>
	);
}

export default App;
