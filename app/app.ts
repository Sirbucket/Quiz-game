import { questions } from "./questions";
import { changeQuestion } from "./quizDisplay";

let currentQuestionNumber = 0;
let currentQuestion = questions[currentQuestionNumber];

export const nextQuestion = () => {
	currentQuestionNumber += 1;
	currentQuestion = questions[currentQuestionNumber];
}

export const prevQuestion = () => {
	currentQuestionNumber -= 1;
	currentQuestion = questions[currentQuestionNumber];
}

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
			nextQuestion();
			changeQuestion(currentQuestion);
});

changeQuestion(currentQuestion);