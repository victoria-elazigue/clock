// gets element with id ="clock"
var clock = document.getElementById ('clock'); 

//function gets current time and displays it in element with the id = "clock"
function displayTime() {

	var time = new Date();
	var hours = time.getHours().toString();
	var minutes = time.getMinutes().toString(); 
	var seconds = time.getSeconds().toString(); 
	var meridiem = "PM"
	

if (hours.length < 2) {
	hours = '0' + hours; 
}

if (minutes.length < 2){
	minutes = '0' + minutes; 
}

if (seconds.length < 2){
	seconds = '0' + seconds; 
}

if (hours.length >12){
	hours = hours -12; 
	miridiem = "AM"
}

if (hours.length === 12){
	hours = 12; 
}

var clockString = hours + ' : ' + minutes + ' . ' + seconds + ' '+ meridiem;   

clock.textContent = clockString; 

}

//setInterval method updates clock every second
displayTime(); 
setInterval(displayTime, 1000); 
