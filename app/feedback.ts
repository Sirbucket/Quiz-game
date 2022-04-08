import "/style.css";

export const markWrong = (button : HTMLButtonElement) => {
	button.classList.add('wrong');
}

export const markRight = (button : HTMLButtonElement) => {
	button.classList.add('right');
}