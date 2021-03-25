var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function fetchRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for(var i=0; i<6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomGradient() {
	color1.value = fetchRandomColor();
	color2.value = fetchRandomColor();
	setGradient();
}

css.onclick = function() {
    document.execCommand("copy");
}

function copyCss(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", css.textContent);
    }
    alert("Copied to clipboard!");
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setRandomGradient);
css.addEventListener("copy", copyCss);
setGradient();