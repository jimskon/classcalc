
var result = document.getElementById("result");
var buttons = document.querySelectorAll("button");

function isOp(v) {
  if (v == "X" || v == "/" || v == "+" || v == "-")
    return true;
  else
    return false;
}

for (var button of buttons) {
  button.addEventListener("click", function (e) {
    var value = e.target.getAttribute("data-value");
    if (isOp(value) && isOp(result.innerHTML[-1]) {
      return;
    }
    if (value == "X") {
      value = "*";
    }
    if (value != "=" && value != "C") {      
      result.innerHTML += value;
    } else if (value == "C") {
      result.innerHTML = "";
    } else if (value == "=") {
      console.log(result.innerHTML);
      r = eval(result.innerHTML);
      result.innerHTML = r;
    }
  });
}

