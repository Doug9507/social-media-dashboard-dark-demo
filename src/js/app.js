const $checkbox = document.querySelector("#checkbox");

if (window.matchMedia("prefers-color-scheme: dark").matches === false) {
	console.log("hola");
} else {
	console.log("bye");
}

$checkbox.addEventListener("change", function (e) {
	document.body.classList.toggle("is-dark-mode");
});
