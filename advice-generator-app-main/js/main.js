const URL = "https://api.adviceslip.com/advice";

const getAdvices = async () => {
	try {
		const response = await fetch(URL, { cache: "no-cache" });
		const data = await response.json();

		let adviceID = document.querySelector(".advice-id");
		let adviceText = document.querySelector(".advice-text");

		adviceID.textContent = data.slip.id;
		adviceText.textContent = data.slip.advice;
	} catch (error) {
		console.error(error);
	}
};

getAdvices();

const btnDice = document.querySelector(".btn-dice");

btnDice.addEventListener("click", getAdvices);
