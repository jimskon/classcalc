
var result = document.getElementById("result");
var buttons = document.querySelectorAll("button");

for (var button of buttons) {
  button.addEventListener("click", function (e) {
    var value = e.target.getAttribute("data-value");
    if (value != "=" && value != "C") {      
      result.innerHTML += value;
    } else if (value == "C") {
      result.innerHTML = "";
    } else if (value == "=") {
      r = eval(result.innerHTML);
      result.innerHTML = r;
    }
  });
}

