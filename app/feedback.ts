//Marks the button wrong.
export const markWrong = (button: HTMLButtonElement) => {
	button.classList.add('wrong');
}
//Marks the button right.
export const markRight = (button: HTMLButtonElement) => {
	button.classList.add('right');
}