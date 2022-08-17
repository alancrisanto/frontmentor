const URL = "https://api.adviceslip.com/advice";

const getAdvices = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	console.log(data);

	let adviceID = document.querySelector(".advice-id");
	let adviceText = document.querySelector(".advice-text");

	adviceID.textContent = data.slip.id;
	adviceText.textContent = data.slip.advice;
};

getAdvices();
