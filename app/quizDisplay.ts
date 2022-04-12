//Type definition.
export type question = {
	question: string,
	answer: string,
	distractors: string[],
}

//Comments are done with collapsable functions expected as standard.
export const questions: question[] = [
	{
		question: "What is the best 2 handed weapon for orcs?",
		answer: "Dark Edge of Insanity",
		distractors: [
			"Corrupted Ashbringer",
			"Might of Menethil",
			"Severance",
		]
	}, //Best 2 handed weapon for orcs.
	{
		question: "What is the best race for warriors?",
		answer: "Orc",
		distractors: [
			"Human",
			"Tauren",
			"Night Elf",
		]
	}, //Best race for warriors.
	{
		question: "What's the best DPS spec?",
		answer: "1 Handed Fury",
		distractors: [
			"2 Handed Fury",
			"Arms",
			"Protection",
		]
	}, //Best DPS spec for warriors.
	{
		question: "What is the best tank helmet in the game?",
		answer: "T2.5",
		distractors: [
			"T3",
			"Helm of Rage",
			"T2",
		]
	}, //Best tank helmet.
	{
		question: "What is the best 1 handed weapon for humans?",
		answer: "The Hungering Cold",
		distractors: [
			"Kingsfall",
			"Gressil, Dawn of Ruin",
			"Maexxna's Fang",
		]
	}, //Best 1 handed weapon for humans.
	{
		question: "What does Enrage do?",
		answer: "25% damage buff",
		distractors: [
			"15% damage resistance",
			"30% movement speed",
			"30% attack speed",
		]
	}, //What is, Enrage.
	{
		question: "What is the most reliable and profitable farm for warriors?",
		answer: "Maraudon",
		distractors: [
			"Scarlet Monestary",
			"DM West",
			"Scarlet Armory",
		]
	}, //Best gold farm.
	{
		question: "What is the best enchantment for your weapons?",
		answer: "Crusader",
		distractors: [
			"Striking",
			"Weightstone",
			"Mithril Chain",
		]
	}, //Best enchant.
	{
		question: "What is Diamond Flask's spell power scaling ratio?",
		answer: "1:1",
		distractors: [
			"2:1",
			"3:1",
			"6:1",
		]
	}, //What is diamond flasks spell power scaling ratio?
	{
		question: "What does Flurry do?",
		answer: "30% Attack Speed",
		distractors: [
			"25% Reduced Ability Cooldown.",
			"10% chance to attack twice.",
			"35% longer range.",
		]
	}, //What is, Flurry.
];


//Marks the button.
export const markButton = (button: HTMLButtonElement, str: string) => {
	button.classList.add(str);
}

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
			markButton(button,"right");
		}
		else {
			// handle wrong answer
			// (this is just a placeholder for now
			// -- we should do something better with
			// wrong answers eventually)
			markButton(button,"wrong");
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

//Self explanatory
export const shuffleArray = (array) => {
	for (let i = array.length; --i;) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
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