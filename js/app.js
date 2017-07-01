// gets element with id ="clock"
var clock = document.getElementById ('clock'); 

//function gets current time and displays it in element with the id = "clock"
function displayTime() {

	var time = new Date();
	var hours = (time.getHours() % 12).toString();
	var minutes = time.getMinutes().toString(); 
	var seconds = time.getSeconds().toString(); 
	var meridiem = "AM"

if (hours.length < 2) {
	hours = '0' + hours; 
}

if (minutes.length < 2){
	minutes = '0' + minutes; 
}

if (seconds.length < 2){
	seconds = '0' + seconds; 
}

var clockString = hours + ' : ' + minutes + ' . ' + seconds;   

clock.textContent = clockString; 

}

//setInterval method updates clock every second
displayTime(); 
setInterval(displayTime, 1000); 
