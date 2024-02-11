var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
function myfunction() {
  document.getElementById("B3").style.transform = "translatey(-48px)";
  document.getElementById("B3").style.transition = "0.2s";
  document.getElementById("B2").style.transform = "translatey(-30px)";
  document.getElementById("B1").style.transform = "translatey(-30px)";
}
function myfunction2() {
  document.getElementById("B2").style.transform = "translatey(-48px)";
  document.getElementById("B2").style.transition = "0.2s";
  document.getElementById("B3").style.transform = "translatey(-30px)";
  document.getElementById("B1").style.transform = "translatey(-30px)";
}
function myfunction3() {
  document.getElementById("B1").style.transform = "translatey(-48px)";
  document.getElementById("B1").style.transition = "0.2s";
  document.getElementById("B2").style.transform = "translatey(-30px)";
  document.getElementById("B3").style.transform = "translatey(-30px)";
}
function myfunction4() {
  var inputelement = document.getElementById("require");
  inputelement.required = true;
  document.getElementById("B1").style.transform = "translatey(-30px)";
  document.getElementById("B2").style.transform = "translatey(-30px)";
  document.getElementById("B3").style.transform = "translatey(-30px)";
}
