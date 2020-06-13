document.addEventListener('DOMContentLoaded', () => {
  var lastValClick;
  var currentVal;
  var buttonClick = document.querySelectorAll('.key');
for(var i = 0; i < buttonClick.length; i++)
 {
  buttonClick[i].addEventListener("click", () => {
    var target = event.target;
    
    if (target.innerHTML !== "AC") {
      if (target.innerHTML === "=") {
        currentVal = Math.round(eval(currentVal) * 1000) / 1000;
        document.querySelector(".app-display").textContent = currentVal;
        lastValClick = target.innerHTML;
      }
      else {
        if (document.querySelector(".app-display").textContent === "0") {
          document.querySelector(".app-display").textContent = target.innerHTML;
          currentVal = target.innerHTML;
          lastValClick = target.innerHTML;
        }
        else {
          if (target.innerHTML === "÷") {
            if (lastValClick !== "÷") {
              lastValClick = target.innerHTML;
              currentVal += "/";
              document.querySelector(".app-display").textContent += target.innerHTML;
            }
          }
          else if (target.innerHTML === "×") {
            if (lastValClick !== "×") {
              lastValClick = target.innerHTML;
              currentVal += "*";
              document.querySelector(".app-display").textContent += target.innerHTML;
            }
          }
          else if (target.innerHTML === "+") {
            if (lastValClick !== "+") {
              lastValClick = target.innerHTML;
              currentVal += "+";
              document.querySelector(".app-display").textContent += target.innerHTML;
            }
          }
          else if (target.innerHTML === "-") {
            if (lastValClick !== "-") {
              lastValClick = target.innerHTML;
              currentVal += "-";
              document.querySelector(".app-display").textContent += target.innerHTML;
            }
          }
          else {
            lastValClick = target.innerHTML;
            currentVal += target.innerHTML;
            document.querySelector(".app-display").textContent += target.innerHTML;
          }
        }
      }
    }
    else {
      lastValClick = target.innerHTML;
      document.querySelector(".app-display").textContent = "0";
    }
  });
}
});