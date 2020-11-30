import styled from "styled-components";

export const Button = styled.button`
	display: inline-block;
	background-color: ${(props) => (props.primary ? "violet" : "white")};
	color: #2b93a2;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #2b93a2;
	border-radius: 3px;
	text-transform: uppercase;
	outline: none;
	&:hover {
		outline: none;
		cursor: pointer;
	}
`;

export const QuizButton = styled.button`
	display: inline-block;
	background-color: ${(props) => (props.primary ? "violet" : "white")};
	color: palevioletred;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	display: block;
`;

export const AnswerButton = styled.button`
	display: inline-block;
	background-color: #2b93a2;
	color: white;
	font-size: 1em;
	margin: 0.2rem;
	padding: 0.25em;
	width: 100%;
	border: none;
	&:hover {
		background-color: #2b93d3;
		cursor: pointer;
	}
`;
