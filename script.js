/**
 * Created by JENN on 9/25/2016.
 */

window.onload = function () {

var bottles = "";
var countdown = "";
    var chorus = "Take one out, guzzle it down,";

for (var i = 99; i > 0; i--)
{
    countdown += bottles + i + " bottles of beer in my belly," + "<br/>" + bottles + i + " bottles of beer," +"<br/>"+ chorus + "<br/><br/>";

}
    countdown += "Crap, I'm out of beer!";
    document.getElementById("for").innerHTML = countdown;
}