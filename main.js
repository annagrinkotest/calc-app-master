document.addEventListener('DOMContentLoaded', () => {
  var currentVal;
  document.querySelector(".app-keys").addEventListener("click", () => {
    var target = event.target;
    if (target.innerHTML != "AC") {
      if (target.innerHTML == "=") {
        currentVal = Math.round(eval(currentVal)*1000)/1000;
        document.querySelector("#app-display").textContent = currentVal;
      }
      else {
        if (document.querySelector("#app-display").textContent == 0) { document.querySelector("#app-display").textContent = target.innerHTML;
            currentVal = target.innerHTML;
           }
        else {
          if (target.innerHTML == "÷") { 
            currentVal += "/";
            document.querySelector("#app-display").textContent += target.innerHTML; }
          else if (target.innerHTML == "×") { 
            currentVal += "*";
            document.querySelector("#app-display").textContent += target.innerHTML; }
          else {
            currentVal += target.innerHTML; 
            document.querySelector("#app-display").textContent += target.innerHTML; }
        }
      }
    }
    else { document.querySelector("#app-display").textContent = "0"; }
  });
});