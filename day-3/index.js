function digit(num) {
  let userinput = document.getElementById("user-input");
  if (num === ".") {
    if (userinput.value.includes(".")) {
      return;
    }
  }
  userinput.value += num;
}

function operator(ope) {
  let userinput = document.getElementById("user-input");
  if (ope === "AC") {
    userinput.value = "";
    return;
  }
  if (ope === "/") {
    userinput.value += "/";
    return;
  }
  if (ope === "*") {
    userinput.value += "*";
    return;
  }
  if (ope === "-") {
    userinput.value += "-";
    return;
  }
  if (ope === "+") {
    userinput.value += "+";
    return;
  }
  if (ope === "%") {
    userinput.value += "%";
  }
  if (ope === "c") {
    userinput.value = userinput.value.slice(0, -1);
  }
}

let equalBtn = document.querySelector(".IsEqual");
equalBtn.addEventListener("click", () => {
  let userinput = document.getElementById("user-input");
  try {
    userinput.value = eval(userinput.value) || 0;
  } catch (error) {
    userinput.value = `error ${error}`;
  }
});
