
var result = document.getElementById("result");
var buttons = document.querySelectorAll("button");

for (var button of buttons) {
  button.addEventListener("click", function (e) {
    var value = e.target.getAttribute("data-value");
    if (value !in ["=","C"]) {      
      result.innerHTML += value;
    }
  });
}

