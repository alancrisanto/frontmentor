document.addEventListener("DOMContentLoaded", () => {
	const shareBtn = document.querySelector(".share-btn");
	const sharePopover = document.querySelector(".share-popover");
	const profile = document.querySelector(".profile");

	console.log(shareBtn);

	shareBtn.addEventListener("click", () => {
		sharePopover.classList.toggle("active");
		profile.classList.toggle("active");
	});
});
