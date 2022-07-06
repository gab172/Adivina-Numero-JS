alert("Ingresa un numero menor a 100");

const text = document.querySelector("#text");
const numero = (document.querySelector("#numero"));
const btn = document.querySelector("#btn");
const random = Math.floor(Math.random() * 100);
let intentos = 10;

eventos()
function eventos() {
	btn.addEventListener("click", controladorNumero)
}

function controladorNumero() {
	if (intentos === 0) {
		alert("Se te acabaron los intentos, intentanlo de nuevo");
		window.location.reload();
	} else if (random > Number(numero.value)) {
		text.textContent = "El numero es mayor al ingresado"
		--intentos
		console.log(intentos)
	} else if (random < Number(numero.value)) {
		text.textContent = "El numero es menor al ingresado"
		--intentos
	} else{
		text.textContent = "Ganaste!!!!!!";
		alert("Ganaste, felicitaciones");
		window.location.reload();
	}
}