  /*
notes:
make a clock face
button dies

make coundown clock that sets time for the amount it is pressed down

*/ 

var currentTime = new Date();

var currentHour currentTime.getHours ();
var currentMinute currentTime.getMinutes ();
var currentSecond currentTime.getSeconds ();
var currentMilisecond currentTime.getMiliseconds ();

currentMinute = (currentMinute < 10 ? "0" : "" ) + currentMinute;
currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;
currentMilisecond = (currentMilisecond < 10 ? "0" : "") + currentMilisecond;

var currentTimeString = currentHour + ":" + currentMinute + ":" + currentSecond + " " + timeOfDay;

