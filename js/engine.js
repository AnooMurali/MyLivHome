// declare a variable to hold date/time of the day

var dt = new Date();
var hr = dt.getHours();
var mm = dt.getMinutes();
var ss = dt.getSeconds();
var greeting; 
var clear; // have to create a function to get teh clock ticking


function myHour() {
	if (hr > 18) {
		greeting = "Good Evening!" + " The time is, " + hr + ":" + mm  + ":" + ss;

	} 
	else if (hr > 12) {
		greeting = "Good Afternoon!" + " The time is, " + hr + ":" + mm + ":" + ss;
	}
	else if (hr < 0){
		greeting = "Good Morning!" + " The time is, " + hr + ":" + mm + ":" + ss;
	}
	else {
		greeting = "Welcome!" + " The time is, " + hr + ":" + mm + ":" + ss;
	}
	console.log(greeting);
	document.write ("Hello there, " + greeting);
}
myHour();