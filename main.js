document.addEventListener('DOMContentLoaded', () => {
  let lastValClick;
  let currentVal = "0";
  const buttonClick = document.querySelectorAll('.key');

  buttonClick.forEach(element => {
    element.addEventListener("click", () => {
      let target = event.target;
      if (target.innerHTML === "AC") {
        lastValClick = target.innerHTML;
        document.querySelector(".app-display").textContent = "0";
        currentVal = "0";
      }
      else if (target.innerHTML !== "." && document.querySelector(".app-display").textContent === "0") {
        document.querySelector(".app-display").textContent = target.innerHTML;
        currentVal = target.innerHTML;
        lastValClick = target.innerHTML;
      }
      else if (target.innerHTML === "=") {
        currentVal = Math.round(eval(currentVal) * 1000) / 1000;
        document.querySelector(".app-display").textContent = currentVal;
        lastValClick = target.innerHTML;
      }
      else if (target.innerHTML === "÷") {
        if (lastValClick !== "÷" && lastValClick !== "+" && lastValClick !== "-" && lastValClick !== "×") {
          lastValClick = target.innerHTML;
          currentVal += "/";
          document.querySelector(".app-display").textContent += target.innerHTML;
        }
      }
      else if (target.innerHTML === "×") {
        if (lastValClick !== "÷" && lastValClick !== "+" && lastValClick !== "-" && lastValClick !== "×") {
          lastValClick = target.innerHTML;
          currentVal += "*";
          document.querySelector(".app-display").textContent += target.innerHTML;
        }
      }
      else if (target.innerHTML === "+") {
        if (lastValClick !== "÷" && lastValClick !== "+" && lastValClick !== "-" && lastValClick !== "×") {
          lastValClick = target.innerHTML;
          currentVal += "+";
          document.querySelector(".app-display").textContent += target.innerHTML;
        }
      }
      else if (target.innerHTML === "-") {
        if (lastValClick !== "÷" && lastValClick !== "+" && lastValClick !== "-" && lastValClick !== "×") {
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
    });
  });
});