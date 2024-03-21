var hiddenElement = document.getElementById("transparent-about");
var btn = document.querySelector(".about-link");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "start", behavior: "smooth" });
}

btn.addEventListener("click", handleButtonClick);


var hiddenElement2 = document.getElementById("transparent-product");
var btn2 = document.querySelector(".product-link");

function handleButtonClick2() {
  hiddenElement2.scrollIntoView({ block: "start", behavior: "smooth" });
}

btn2.addEventListener("click", handleButtonClick2);




var hiddenElement3 = document.getElementById("transparent-cooperation");
var btn3 = document.querySelector(".coop-link");

function handleButtonClick3() {
  hiddenElement3.scrollIntoView({ block: "start", behavior: "smooth" });
}

btn3.addEventListener("click", handleButtonClick3);

