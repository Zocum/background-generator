var css = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", "
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function getRandomColor() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.body.style.background = "#" + randomColor;
	color1.innerHTML = "#" + randomColor;
	//color2.innerHTML = "#" + randomColor;
}

button.addEventListener("click", getRandomColor);
color1.addEventListener("input", setGradient); //Alternative: comment this out & add 'oninput=setGradient' to input in HTML
color2.addEventListener("input", setGradient);