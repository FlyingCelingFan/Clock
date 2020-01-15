  /*
notes:
make a clock face
button dies

make coundown clock that sets time for the amount it is pressed down

*/ 

<script type="text/javascript">


function updateClock() {


var currentTime = new Date();

//declare variables for the clock
var currentHour currentTime.getHours ();
var currentMinute currentTime.getMinutes ();
var currentSecond currentTime.getSeconds ();
var currentMilisecond currentTime.getMiliseconds ();

currentMinute = (currentMinute < 10 ? "0" : "" ) + currentMinute;
currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;
currentMilisecond = (currentMilisecond < 10 ? "0" : "") + currentMilisecond;


//shorthand if statement.
//if condition is true, it returns the value before the colon.
//if condition is false, it returns the value after the colon.
var timeOfDay = ( currentHour < 12 ) ? "AM" : "PM";
currentHour = ( currentHour > 12 ) ? currentHour	- 12 : currentHour;
currentHour	= ( currentHour	== 0 ) ? 12 : currentHour;

//This is what the user sees
//ex: Hour:Minute:Second:Milisecond AM/PM
var currentTimeString = currentHour + ":" + currentMinute + ":" + currentSecond + ":" + currentMilisecond + " " + timeOfDay;

//shows the clock in index.html
document.getElementById("clock").firstChild.nodeValue = currentTimeString;

}


</script>