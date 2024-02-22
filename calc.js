
var result = document.getElementById("result");
var buttons = document.querySelectorAll("button");

for (var button of buttons) {
  button.addEventListener("click", function (e) {
    var value = e.target.getAttribute("data-value");
    result.innerHTML = value;
  });
}

