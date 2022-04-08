import { questions } from "./questions";
import { changeQuestion } from "./quizDisplay";

let currentQuestionNumber = 0;
let currentQuestion = questions[currentQuestionNumber];

//Moves to next question in the array.
const nextQuestion = () => {
	currentQuestionNumber += 1;
	currentQuestion = questions[currentQuestionNumber];
}

//Moves to the last question in the array.
const prevQuestion = () => {
	currentQuestionNumber -= 1;
	currentQuestion = questions[currentQuestionNumber];
}

//Makes the button logic work.
const loadQuizLogic = () => {
	document
		.querySelector("#previous")
		.addEventListener("click", () => {
			if (currentQuestionNumber <= 0) {
				return;
			}
			else {
				prevQuestion();
				changeQuestion(currentQuestion);
			}
		});

	document
		.querySelector('#next')
		.addEventListener("click", () => {
			if (currentQuestionNumber >= questions.length - 2) {
				return;
			}
			else {
				nextQuestion();
				changeQuestion(currentQuestion);
			}
		});
	changeQuestion(currentQuestion);
}
loadQuizLogic();