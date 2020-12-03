var getnames = localStorage.getItem("Username");
var getscores = localStorage.getItem("Score");

var names= JSON.parse(getnames);
var scores= JSON.parse(getscores);

window.onload = function(){ display();}

function display(){

var displayname = document.getElementById("users");
displayname.innerHTML = names;

var displayscore = document.getElementById("scores");
displayscore.innerHTML = scores;
}