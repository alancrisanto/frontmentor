const URL = "https://api.adviceslip.com/advice";

const getAdvices = async () => {
	const response = await fetch(URL);
	const data = await response.json();

	let adviceID = document.querySelector(".advice-id");
	let adviceText = document.querySelector(".advice-text");

	adviceID.textContent = data.slip.id;
	adviceText.textContent = data.slip.advice;
};

getAdvices();

const btnDice = document.querySelector(".btn-dice");

btnDice.addEventListener("click", getAdvices);
