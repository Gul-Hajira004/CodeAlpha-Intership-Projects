const output = document.querySelector("#output");
const keyButtons = document.querySelectorAll("button");

keyButtons.forEach((btn) => {
  btn.onclick = () => {
    const value = btn.innerText;

    if (btn.id == "reset") {
      output.innerText = "";
    } else if (btn.id == "del") {
      let currentText = output.innerText.toString();
      output.innerText = currentText.substr(0, currentText.length - 1);
    } else if (output.innerText != "" && btn.id == "equals") {
      try {
        
        let expression = output.innerText.replace("÷", "/").replace("×", "*");
        output.innerText = eval(expression); 
      } catch {
        output.innerText = "Error!";
        setTimeout(() => (output.innerText = ""), 2000);
      }
    } else if (output.innerText == "" && btn.id == "equals") {
      output.innerText = "Empty!";
      setTimeout(() => (output.innerText = ""), 2000);
    } else {
      output.innerText += value;
    }
  };
});

const themeSwitchBtn = document.querySelector(".theme-switch");
const calcApp = document.querySelector(".dark-mode");
const switchIcon = document.querySelector(".icon-switch");

let darkMode = true;

themeSwitchBtn.onclick = () => {
  calcApp.classList.toggle("dark-mode");
  themeSwitchBtn.classList.toggle("active");
  darkMode = !darkMode;
};
