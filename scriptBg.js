var csstxt = document.querySelector('h3');
var color1 =  document.querySelector(".color1");
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var random = document.getElementById('random');
var auto = document.getElementById('auto');
var stop = document.getElementById('stop');

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	csstxt.textContent = "background: " + body.style.background + ";   ";
}


window.onload = function(){
	var clipboard = new ClipboardJS('.btnCopy');
    clipboard.on('error', function(e) {
        console.log(e);
    });
	setGradient();
}

function randomColor() {
	// var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);  //Not accurate sometimne give only 4 value
	// console.log(newColor);

	var newColor = '#';
	var letters = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++){
		newColor += letters[(Math.floor(Math.random() * 16))];
	}
	return newColor;
}

function setRandomColor() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}


color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

random.addEventListener('click', setRandomColor);

auto.addEventListener('click', function() {
	interval = setInterval(setRandomColor, 3000); //3sec refresh
});

stop.onmousedown = function(){
	clearInterval(interval);
}


