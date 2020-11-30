import React, { useState } from "react";
import { NameInput } from "../styled/input";
import { Button } from "../styled/button";
import { Card } from "../styled/card";

function Start({ setNameInParent }) {
	const [name, setName] = useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};

	return (
		<div className="start-screen">
			<Card>
				<h1>League Of Legends Quiz</h1>
				<h5>Choose Your Summoner Name</h5>
				<NameInput onChange={handleName} />
				<Button onClick={() => setNameInParent(name)}>Start</Button>
			</Card>
		</div>
	);
}

export default Start;
