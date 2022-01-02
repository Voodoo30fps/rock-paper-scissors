let rulesButton = document.querySelector('.rules-button a');
let rulesModal = document.querySelector('.rules-modal');
let rulesClose = document.querySelector('.rules-modal span.close');

rulesButton.addEventListener("click", () => {
	rulesModal.classList.toggle("hidden");
});

rulesClose.addEventListener("click", () => {
	rulesModal.classList.toggle("hidden");
});