import { question } from "./questions";
import { shuffleArray } from "./utilities";

/* Create a single button with text string for question */
const makeButton = (str: string, question: question) => {
	const button = document.createElement('button');
	button.innerText = str;
	button.addEventListener("click", () => {
		if (str === question.answer) {
			// handle right answer
			// (this is just a placeholder for now --
			// we should do something better with
			// right answers eventually)
			window.alert('Correct!');
		}
		else {
			// handle wrong answer
			// (this is just a placeholder for now
			// -- we should do something better with
			// wrong answers eventually)
			window.alert('Wrong!');
		}
	});
	return button;
}

/* Add buttons for answers to container */
const addAnswerButtons = (container: HTMLDivElement, question: question) => {
	const answers = getAnswers(question);
	answers.forEach((str) => {
		container.appendChild(
			makeButton(str, question)
		);
	});
}

const getAnswers = (question: question) => {
	const answers = [...question.distractors, question.answer];
	shuffleArray(answers);
	return answers;
}

export const changeQuestion = (question: question) => {
	const container = document.querySelector('.question-container');
	container.innerHTML = `
		<div class="question-container">
	  	<div class="question">
	    	${question.question}
	  	</div>
	  	<div class="answers">      
	  	</div>
		</div>
	`;
	// Now add the buttons...
	addAnswerButtons(
		container.querySelector('.answers'),
		question
	);
}