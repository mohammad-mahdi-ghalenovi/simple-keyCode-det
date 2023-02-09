// title
let any = document.querySelector(".any");
let enterText = document.querySelector(".enter-txt");
let keyText = document.querySelector(".key-txt");

//event
let keyTxt = document.querySelector(".key");
let locationTxt = document.querySelector(".location");
let wichTxt = document.querySelector(".wich");
let codeTxt = document.querySelector(".code");
// end of event

any.addEventListener("mouseover", function () {
  enterText.style.color = "orange";
  keyText.style.color = "orange";
  any.style.color = "black";
  any.style.transition = "0.4s";
  enterText.style.transition = "0.4s";
  keyText.style.transition = "0.4s";
});
any.addEventListener("mouseout", function () {
  keyText.style.color = "black";
  enterText.style.color = "black";
  any.style.color = "orange";
  any.style.transition = "0.4s";
  enterText.style.transition = "0.4s";
  keyText.style.transition = "0.4s";
});
// end of title
//////////////////////////////////////
document.body.addEventListener("keydown", function (event) {
  event.preventDefault();
  keyTxt.innerHTML = event.key;
  locationTxt.innerHTML = event.location;
  wichTxt.innerHTML = event.which;
  codeTxt.innerHTML = event.code;
});
