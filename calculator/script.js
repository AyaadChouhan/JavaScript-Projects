
const inp = document.getElementById("inp");
const btnCont = document.querySelector(".buttonCont");

function calculatorFunc(e) {
  let str = String(inp.value);
  let checkDataType = Number(e.target.innerText);
  let inputVal = inp.value;

  if (e.target.id === "btn" && !isNaN(checkDataType)) {
    let val = e.target.innerText;
    inp.value += val;
    console.log(val);
  } else if (!isNaN(Number(str.at(str.length - 1)))) {
    if (e.target.id === "btn") {
      let val = e.target.innerText;
      inp.value += val;
    }
  }
  switch (e.target.innerText) {
    case "AC":
      inp.value = "";
      break;
    case "=":
      let value = inp.value.slice(0, -1);
      try {
        inp.value = eval(value);
      } catch (error) {
        inp.value = "";
        throw new Error("calculation failed");
      }
      break;
    case "C":
      let singleDeletVal = inp.value.slice(0, -2);
      inp.value = singleDeletVal;
    default:
      break;
  }
}
btnCont.addEventListener("click", (e) => {
  calculatorFunc(e);
});