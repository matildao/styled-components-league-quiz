import React, { useState } from "react";
import { AnswerButton } from "../styled/button";
import { QuestionContainer, ImageCard } from "../styled/card";

function Quiz({ questions }) {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [points, setPoints] = useState(0);
	const [ended, setEnded] = useState(false);

	const nextQuestion = (answer) => {
		const increment = currentQuestion + 1;

		if (answer === questions[currentQuestion].correct) {
			setPoints(points + 1);
		}

		if (increment < questions.length) {
			setCurrentQuestion(increment);
		} else {
			setEnded(true);
		}
	};

	return (
		<div>
			{!ended && (
				<div>
					<div>Score: {points}</div>
					<QuestionContainer className="question">
						<ImageCard
							src={questions[currentQuestion].imageUrl}
							alt="question"
						></ImageCard>
						<div>{questions[currentQuestion].question}</div>
						<div className="flex-row question-container">
							{questions[currentQuestion].answers.map((answer) => {
								return (
									<AnswerButton
										key={answer}
										onClick={() => nextQuestion(answer)}
									>
										{answer}
									</AnswerButton>
								);
							})}
						</div>
					</QuestionContainer>
				</div>
			)}

			{ended && <div>Your Score {points}</div>}
		</div>
	);
}

export default Quiz;
